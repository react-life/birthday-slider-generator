import Express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import reactCookie from 'react-cookie';
import httpProxy from 'http-proxy';
import path from 'path';
import http from 'http';
import webpack from 'webpack';

import config from './config';
import Html from './helpers/Html';

const app = new Express();
const server = new http.Server(app);

const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort;
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard', resave: false, saveUninitialized: false }));


// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use('/ws', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/ws'});
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  let json;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  json = {error: 'proxy_error', reason: error.message};
  res.end(JSON.stringify(json));
});

app.use(Express.static(path.join(__dirname, '..', 'static')));

if (__DEVELOPMENT__) {
  /* eslint-disable global-require */
  const webpackConfig = require('../webpack/dev.config');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    stats: {
      colors: true,
    },
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use((req, res) => {
  reactCookie.setRawCookie(req.headers.cookie);
  reactCookie.plugToRequest(req, res);

  const content = renderToStaticMarkup(
    <Html
      assets={{
        javascript: {
          main: '/dist/main.js',
        },
        styles: __DEVELOPMENT__ ? {} : {
          main: '/dist/main.css',
        },
      }}
    />
  );

  res.send(`<!doctype html> ${content}`);
});

/* eslint-disable no-console */
if (config.port) {
  server.listen(config.port, err => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

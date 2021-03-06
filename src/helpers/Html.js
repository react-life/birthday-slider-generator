import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
  };

  render() {
    const { assets } = this.props;
    const head = Helmet.rewind();

    return (
      <html lang='ru'>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel='shortcut icon' href='/favicon.ico' />

          <meta name='viewport' content='width=device-width, initial-scale=1' />

          {/* Fonts */}
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link
              href={assets.styles[style]}
              key={key}
              media='screen, projection'
              rel='stylesheet'
              type='text/css'
              charSet='UTF-8'
            />
          )}
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,600,700&subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        </head>
        <body>
          <div id='content' />
          <script src={assets.javascript.main} charSet='UTF-8' />
        </body>
      </html>
    );
  }
}

import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import babelLoaderQuery from './babelLoaderQuery';

const projectRootPath = path.resolve(__dirname, '../');
const assetsPath = path.resolve(projectRootPath, './static/dist');
const root = path.join(__dirname, '../src');

export default function (isProduction = false) {
  const classFormat = isProduction ? '[hash:base64:5]' : '[name]_[local]';
  const stylesLoader = [
    `css?modules&minimize&importLoaders=1&localIdentName=${classFormat}`,
    'postcss?parser=sugarss',
  ];

  return {
    context: path.resolve(__dirname, '..'),
    output: {
      path: assetsPath,
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/dist/',
    },
    progress: true,
    resolve: {
      modules: [
        'src',
        'node_modules',
      ],
      modulesDirectories: [
        'src',
        'node_modules',
      ],
      extensions: ['', '.json', '.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: babelLoaderQuery(),
        },
        {
          test: /\.sss$/,
          loader: isProduction ? ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: stylesLoader.join('!'),
          }) : ['style'].concat(stylesLoader).join('!'),
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'raw-loader',
        },
        {
          test: /\.(jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10240',
        },
      ],
    },
    /* eslint-disable global-require */
    postcss: webpack => (process.env.LINTER ? [require('stylelint')] : []).concat([
      require('postcss-import')({
        addDependencyTo: webpack,
        path: `${root}/styles`,
      }),
      require('postcss-custom-media'),
      require('postcss-custom-properties')({
        warnings: false,
      }),
      require('postcss-color-function'),
      require('postcss-nested'),
      require('autoprefixer'),
      require('postcss-autoreset')({
        rulesMatcher: ({ selector, parent: { name, type } }) => (
          !/(_|:|\[)/.test(selector) && type !== 'atrule' && name !== 'keyframes'
        ),
        reset: {
          all: 'initial',
          fontFamily: '"Roboto", sans-serif',
        },
      }),
    ]),
    plugins: [
      new CleanPlugin([assetsPath], { root: projectRootPath }),
    ],
    stats: {
      colors: true,
    },
  };
}

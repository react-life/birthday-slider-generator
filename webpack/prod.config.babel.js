import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import commonConfig from './common.config';

const config = commonConfig(true);

export default {
  ...config,
  devtool: 'source-map',
  entry: {
    main: [
      './src/client.js',
      './src/styles/base.sss',
    ],
  },
  plugins: [
    ...config.plugins,

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },

      __DEVELOPMENT__: false,
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};

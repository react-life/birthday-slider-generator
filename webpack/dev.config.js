import webpack from 'webpack';
import commonConfig from './common.config';

const config = commonConfig();

export default {
  ...commonConfig(),
  devtool: 'inline-eval-cheap-source-map',
  entry: {
    main: [
      'webpack-hot-middleware/client',
      './src/client.js',
      './src/styles/base.sss',
    ],
  },
  plugins: [
    ...config.plugins,

    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    }),
  ],
};

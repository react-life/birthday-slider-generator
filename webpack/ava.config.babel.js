import commonConfig from './common.config';

const config = commonConfig();

export default {
  module: {
    loaders: config.module.loaders,
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  resolve: config.resolve,
  postcss: config.postcss,
};

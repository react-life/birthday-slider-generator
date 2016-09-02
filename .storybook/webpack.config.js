require('babel-register');
const commonConfig = require(`../webpack/common.config`);
const config = commonConfig();

module.exports = (storybookBaseConfig) => {
  return Object.assign({}, storybookBaseConfig, {
    target: config.target,
    module: config.module,
    postcss: config.postcss,
    resolve: config.resolve,
    plugins: process.env.NODE_ENV === 'development' ? storybookBaseConfig.plugins : [],
  });
};

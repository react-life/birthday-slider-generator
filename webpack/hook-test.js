const mockCssModules = require('mock-css-modules');

mockCssModules.register(['.sss']);

require.extensions['.svg'] = () => '<svg></svg>';

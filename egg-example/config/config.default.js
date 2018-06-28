'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {
    view:{
      root:path.join(appInfo.baseDir, 'app/view'),
      mapping:{".html": "nunjucks"},
      defaultViewEngine:"nunjucks",
      defaultExtension:".html"
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529916974907_988';

  // add your config here
  config.middleware = [];

  return config;
};

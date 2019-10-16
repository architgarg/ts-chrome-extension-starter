const merge                 = require('webpack-merge');
const common                = require('./webpack.common.js');
// const ExtensionReLoader     = require('webpack-extension-reloader');

module.exports = merge(common,
  {
    devtool: 'inline-source-map',
    mode: 'development'
  },
  {
    plugins: [
      // new ExtensionReLoader({
      //   reloadPage: true,
      //   entries: {
      //     background: 'background',
      //     contentScript: "content_script"
      //   }
      // })
    ]
  }
);

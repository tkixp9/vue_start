const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/less/common/theme.less')
      ]
    }
  },
  configureWebpack: () => {
  },
  devServer: {
    port: 8888,
    disableHostCheck: true, // 可使用本地host配置的域名访问
    proxy: {
      '/api': {
        target: 'http://192.168.50.215:5000',
        changeOrigin: true
      }
    }
  }
}

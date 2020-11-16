const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => options)
    config.resolve.alias.set('@', resolve('src'))
      .set('TG', resolve('src'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false
    }
  },
  productionSourceMap: false,
}

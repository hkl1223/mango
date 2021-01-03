module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mango-website/'
    : '/',
  lintOnSave: false
}
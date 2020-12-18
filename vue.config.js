const path = require('path')

function resolve(excalPath) {
  path.join(__dirname, excalPath)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('public', path.join(__dirname, 'public'))
      .set('views', path.join(__dirname, 'src/views'))
      .set('components', path.join(__dirname, 'src/components'))
  },
}

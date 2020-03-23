const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  devServer: {
    host: process.env.VUE_APP_IP,
    port: process.env.VUE_APP_PORT,
    https: true,
    disableHostCheck: true
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
};

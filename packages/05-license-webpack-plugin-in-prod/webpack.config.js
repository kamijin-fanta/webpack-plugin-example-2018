const { LicenseWebpackPlugin } = require('license-webpack-plugin');

module.exports = {
  mode: 'production',
  // optimization: {
  //   minimizer: [
  //   ],
  // },
  plugins: [
    new LicenseWebpackPlugin({
      pattern: /.*/,
      unacceptablePattern: /GPL/,
      abortOnUnacceptableLicense: true,
      addBanner: true,
      outputFilename: '[name].licenses.txt',
    }),
  ]
}

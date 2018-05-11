const PackageListPlugin = require('./src/PackageListPlugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
    ],
  },
  plugins: [
    new PackageListPlugin(),
  ],
}

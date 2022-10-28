const path = require('path')

module.exports = {
  mode: "production",
  entry: {
    uikit: "../uikit/dist/js/uikit.min.js",
    uikitCore: "../uikit/dist/js/uikit-core.min.js",
    uikitIcons: "../uikit/dist/js/uikit-icons.min.js",
  },
  output: {
    filename: '[name].ie.min.js',
    path: path.resolve(__dirname, '../', 'uikit', 'dist', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          },
        },
      }
    ]
  },
}
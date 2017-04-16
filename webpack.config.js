var webpack = require("webpack");
module.exports = {
  entry: {
    'clovus-ui':'./clovus-ui/ClovusUi.ts',
    'process-control':'./process-control/Main.ts',
    'process-control-models':'./process-control-models',
    vendor:['angular','angular-route']
  },
  output: {
    filename: './shark-chart/public/dist/[name].bundle.js'
  },
  resolve: {
    extensions: ['.js','.ts','.partial.html']
  },
  module: {
    loaders: [
      { test: /.ts$/, loader: 'ts-loader' },
      { test: /.partial.html$/, loader: 'html-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor",
      filename:"./shark-chart/public/dist/vendor.bundle.js"
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  devtool:'inline-source-map'
};
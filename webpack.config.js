module.exports = {
  entry: './process-control/Main.ts',
  output: {
    filename: './bin/process-control.bundle.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [
      { test: /.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
};
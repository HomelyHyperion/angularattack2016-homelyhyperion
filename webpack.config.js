module.exports = {
  entry: "./app/main.ts",
  output: {
    path: __dirname + "/dist", publicPath: 'dist/', filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  }
};
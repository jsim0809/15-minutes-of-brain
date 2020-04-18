module.exports = {
  entry: `${__dirname}/client/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: (`${__dirname}/public`),
  },
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  }
};
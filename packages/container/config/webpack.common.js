module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Match both .js and .mjs files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // jsx and modern js
            plugins: ['@babel/plugin-transform-runtime'], // async/await and other features
          },
        },
      },
    ],
  },
};

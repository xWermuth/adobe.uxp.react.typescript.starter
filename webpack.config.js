const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (_env, arg) => {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      //libraryTarget: "commonjs2"
    },
    devtool: 'cheap-eval-source-map', // won't work on XD due to lack of eval
    externals: {
      uxp: 'commonjs2 uxp',
      photoshop: 'commonjs2 photoshop',
      os: 'commonjs2 os',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?)$/,
          resolve: {
            extensions: ['.js', 'jsx', '.ts', '.tsx'],
          },
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: ['@babel/transform-react-jsx', '@babel/proposal-object-rest-spread', '@babel/plugin-syntax-class-properties'],
              },
            },
          ],
        },
        {
          test: /\.png$/,
          exclude: /node_modules/,
          loader: 'file-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      // new CleanWebpackPlugin(),
      new CopyPlugin(['plugin'], {
        copyUnmodified: true,
      }),
    ],
  };
};

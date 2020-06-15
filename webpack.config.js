const path = require('path');
const webpack = require('webpack');

module.exports = env => {

  const pro = env.production === "true";

  const packConfig = (() => {
    const rootPath = "./";
    return {
      rootPath,
      srcPrefix: `${rootPath}/src`,
      distPath: path.resolve(__dirname, `${rootPath}/dist`)
    }
  })();

  return {
    entry: `${packConfig.srcPrefix}/components/index.js`,
    output: {
      path: packConfig.distPath,
      publicPath: packConfig.distPath,
      filename: 'bidding-components.min.js',
      library: 'biddingComponents',
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader?indentedSyntax'
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ],
              'sass': [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
              ]
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    },
    devtool: pro ? 'none' : 'inline-source-map',
  }
};

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

const ForkTsCheckWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    }
  },

  module: {
    rules: [
      // {
      //     test: /\.tsx?$/,
      //     use: [
      //         {
      //             loader: "ts-loader",
      //             options: {
      //                 transpileOnly: true
      //             }
      //         }
      //
      //     ],
      //     exclude: /node-modules/
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
      // {
      //     test: /\.(t|j)s$/,
      //     exclude: /node-modules/,
      //     use: {
      //         loader: 'babel-loader',
      //         // options: {
      //         //     presets: ['2015']
      //         // }
      //     }
      // },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@vws': path.resolve(__dirname, 'src/views')
    }
  },

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new ForkTsCheckWebpackPlugin()
  ],
  devServer: {
    static: './dist',
    compress: true,
    port: 8088
  }
};

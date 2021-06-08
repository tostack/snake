const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  // 指定入口文件
  entry: './src/index.ts',

  // 指定出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 配置打包环境
    environment: {
      // 不适用箭头函数
      arrowFunction: false
    }
  },
  module: {
    // 指定规则
    rules: [
      {
        // 指定文件类型
        test: /\.ts$/,
        use: [{
          loader: 'babel-loader',
          options: {
            // 设置预定义的环境
            presets: [
              [
                // 指定环境的插件
                "@babel/preset-env",
                {
                  // 要兼容的目标浏览器
                  targets: {
                    "chrome": "88",
                  },
                  // 指定corejs的版本
                  "corejs": 3,
                  // 使用corejs的方式"usage"表示按需加载
                  "useBuiltIns": 'usage'
                }
              ]
            ]
          }
        } ,'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ],

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: '自定义的title'
      template: './src/index.html'
    })
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.js', '.ts']
  }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { metaData, navData, footerData } = require('./src/js/data.js'); // `data.js` からデータを取得

// EJS ファイルを動的に取得
const ejsFiles = glob.sync('./src/views/pages/**/*.ejs');

module.exports = {
  entry: './src/js/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: false, // `CleanWebpackPlugin` を削除したので、`clean: true` はそのまま
  },
  resolve: {
    alias: {
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    liveReload: true,
    open: true,
    client: {
      overlay: false, // エラーオーバーレイを無効化
      webSocketTransport: "ws", // WebSocket の問題を防ぐ
    },
    watchFiles: ["src/**/*"], // ファイル変更を監視
  },
  mode: 'development',
  cache: false, // キャッシュを無効化
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'html-loader',
            options: { sources: false },
          },
          {
            loader: 'template-ejs-loader',
            options: {
              root: path.resolve(__dirname, 'src/views'),
              data: { metaData, navData, footerData },
            },
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    ...ejsFiles.map(file => {
      const pageName = path.basename(file, '.ejs');
      return new HtmlWebpackPlugin({
        template: file,
        filename: `${pageName}.html`,
        minify: false,
        cache: false,
        favicon: path.resolve(__dirname, 'src/favicon.ico'), // 🔹 追加
        templateParameters: {
          pageMeta: metaData[pageName] || metaData.default,
          navData,
          footerData
        },
      });
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },

      ],
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
  ],
};

var path = require('path');

module.exports = {
  // エントリーポイントを指定
  entry : './app/js/app.js',
  // バンドルファイルの出力先を指定
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      // CSSを読み込むローダー
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']   // `-loader`は省略可能
      },
      // ファイルを読み込むローダー
      {
        test: /\.(jpg|png|gif)$/,
        loader: ['url-loader']
      },
    ]
  },
};

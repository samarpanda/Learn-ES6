exports.js = {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
}

exports.html = {
  test: /\.html$/,
  loader: 'html-loader',
  exclude: /node_modules/
}

exports.css = {
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader']
}
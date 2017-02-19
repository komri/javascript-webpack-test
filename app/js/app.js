var HELLO = require('./hello');
var WEBPACK = require('./webpack');

var css = require('../css/hello_webpack.css');
var img = require('../img/img_0.gif');

/** 'Hello, Webpack!!'を出力する */
window.onload = function () {
  // Hello, Webpack!!
  var elm_p = document.createElement('p');
  elm_p.textContent = HELLO + WEBPACK;

  // image
  var elm_i = document.createElement('img');
  elm_i.setAttribute('src', img);

  // bodyに追加
  document.body.appendChild(elm_p);
  document.body.appendChild(elm_i);
};

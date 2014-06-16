'use strict';
var Config = function() {
  var environment = (process.env.ENV || 'dev');
  var config = require('./config/' + environment + '/' + environment);

  var funcs = Object.freeze({
    config: config
  });
  return funcs;
};

var config = new Config().config;

module.exports = config;

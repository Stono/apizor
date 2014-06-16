'use strict';
var $ = require('jquery');
require('bootstrap');
require('bootstrapSelect');

var domReady = require('domready');
var navigation = require('./lib/navigation');

var modules = require('./lib/modules');
var app = modules.application;

domReady(function() {
  navigation.start({
    pushState: true,
    root: '/'
  });

  var options = {
    navigation: navigation
  };
  var container = $('#container');
  var shell = new app.Shell(container, options);
  shell.render();
});

'use strict';
var $ = require('jquery');
var jade = require('jade');
var fs = require('fs');
var template = fs.readFileSync(__dirname + '/view.jade', 'utf8');
var HomeViewModel = require('./homeViewModel');

module.exports = function(element, options) {
  var homeViewModel = new HomeViewModel(options);

  function render() {
    console.log('Rendering Home');
    $(element).html(jade.render(template, homeViewModel));
    $('select').selectpicker();
  }

  function unload() {
    console.log('Unloading Home');
  }

  return Object.freeze({
    render: render,
    unload: unload
  });
};

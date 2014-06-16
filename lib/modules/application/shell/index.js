'use strict';
var fs             = require('fs');
var template       = fs.readFileSync(__dirname + '/view.jade', 'utf8');
var navigation     = require('../../../navigation');
var $              = require('jquery');
var jade           = require('jade');
var ko             = require('knockout');

// Presenters 
var Home           = require('../home');

// View Models for this Component
var ShellViewModel = require('./shellViewModel');

var current;
module.exports = function(element, options) {

  // Home Route /
  navigation.route(/^$/, function() {
    switchTo(Home, options);
  });

  var shellViewModel = new ShellViewModel(options);

  function render() {
    $(element).html(jade.render(template));
    ko.applyBindings(shellViewModel, element.get(0));

    $('.nav a[href!="#"]', element).on('click', function(e) {
      var hrefToUpdate = $(e.target).attr('href');
      console.log(hrefToUpdate);
      navigation.update(hrefToUpdate, {
        trigger: true
      });
      e.preventDefault();
    });
    navigation.loadUrl();
  }

  function switchTo(Presenter, options) {
    console.log('switching');
    if(current) { current.unload() }
    current = new Presenter($('#shell-content'), options);
    current.render();
  }

  return Object.freeze({
    render: render
  });
};

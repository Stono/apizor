(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./lib/modules":8,"./lib/navigation":9,"bootstrap":false,"bootstrapSelect":false,"domready":"w2CZsy","jquery":false}],2:[function(require,module,exports){
'use strict';
module.exports = HomeViewModel;
function HomeViewModel() {
  var self = {
    message: 'Welcome to Apizor, your one stop mock api!'
  };

  return self;
}


},{}],3:[function(require,module,exports){
'use strict';
var $ = require('jquery');
var jade = require('jade');

var template = "#home.panel.panel-default\n  .panel-heading Home\n  .panel-body\n    p= message\n";
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

},{"./homeViewModel":2,"jade":"J73pmz","jquery":false}],4:[function(require,module,exports){
module.exports = {
  Shell: require('./shell')
};

},{"./shell":5}],5:[function(require,module,exports){
'use strict';

var template       = ".row\n  #header.col-md-12\n    nav.navbar.navbar-default.navbar-fixed-top(role=\"navigation\")\n      .container-fluid\n        .navbar-header \n          button.navbar-toggle(data-toggle=\"collapse\", data-target=\"#navbar-collapse-1\")\n            span.sr-only Toggle navigation\n            span.icon-bar  \n            span.icon-bar  \n            span.icon-bar  \n          a.navbar-brand(href=\"#\") Apizor \n\n        #navbar-collapse-1.collapse.navbar-collapse\n          ul.nav.navbar-nav\n            li.active\n              a(href=\"/\") Home\n            li.dropdown\n              a.dropdown-toggle(href=\"#\" data-toggle=\"dropdown\") Projects \n                b.caret\n              ul.dropdown-menu\n                <!-- ko foreach: projects -->\n                li\n                  a(data-bind=\"attr: { href: slug }, text: name\")\n                <!-- /ko -->\n                li.divider\n                li\n                  a(href=\"/project/new\") New Project\n.row\n  #content.col-md-12\n    #shell-content\n\n.row\n  #footer.col-md-12\n";
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

},{"../../../navigation":9,"../home":3,"./shellViewModel":6,"jade":"J73pmz","jquery":false,"knockout":"CUXsN6"}],6:[function(require,module,exports){
'use strict';
var ko = require('knockout');

module.exports = ShellViewModel;

function ShellViewModel() {
  var self = {
    projects: ko.observableArray([])
  };

  self.projects.push({name:'test', slug:'test-project'});
  return self;
}

},{"knockout":"CUXsN6"}],7:[function(require,module,exports){
module.exports = {
};

},{}],8:[function(require,module,exports){
module.exports = {
  common: require('./common'),
  application: require('./application')
};

},{"./application":4,"./common":7}],9:[function(require,module,exports){
'use strict';
var LocationBar = require('location-bar');
module.exports = new LocationBar();

},{"location-bar":"Z60+yG"}]},{},[1])
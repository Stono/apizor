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

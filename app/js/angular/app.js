'use strict';

var app = angular
  .module('PhotonPad', [
    'ui.router',
    'angularMoment',
    'PhotonPad.models',
    'PhotonPad.services',
    'PhotonPad.directives',
  ]);
var models = angular.module('PhotonPad.models', []);
var services = angular.module('PhotonPad.services', []);
var directives = angular.module('PhotonPad.directives', [
  'angularMoment'
]);

var chrome = chrome || false;

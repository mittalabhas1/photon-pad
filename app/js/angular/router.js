'use strict';

var app = angular.module('PhotonPad');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/initialize');
  $stateProvider
    .state('default', {
      abstract: true,
      templateUrl: 'html/templates/2-column.html',
    })
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'html/login.html',
      icon: 'fa-sign-in',
      title: 'Login',
      menuOrder: 1,
    })
    .state('initialize', {
      url: '/initialize',
      controller: 'InitializeCtrl',
      templateUrl: 'html/initialize.html',
      hideInNavigation: true,
      params: {
        byPassLogin: {
          value: false,
        }
      },
      title: 'Initialize',
    })
}]);

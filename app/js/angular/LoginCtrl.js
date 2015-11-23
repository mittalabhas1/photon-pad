'use strict';

var app = angular.module('PhotonPad');

app.controller('LoginCtrl', ['$scope', function($scope) {

  $scope.temps = {};

  var init = function(){
    console.info(' [ LoginCtrl ] : Loaded ');
  };

  init();

}]);


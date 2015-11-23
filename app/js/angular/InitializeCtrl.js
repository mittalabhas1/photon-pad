'use strict';

var app = angular.module('PhotonPad');

app.controller('InitializeCtrl', ['$scope', function($scope) {

  $scope.temps = {};

  var init = function(){
    console.info(' [ InitializeCtrl ] : Loaded ');
  };

  init();

}]);


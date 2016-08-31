/// <reference path="../typings/tsd.d.ts" />

ons.ready(function() {
    console.log("Onsen UI is ready!?");  
});

var app=angular.module('app', ['onsen', 'dndLists', 'angularResizable']);

app.controller('AppController', ['$scope', 
    function($scope) {

    $scope.load = function(page) {
      $scope.mySplitterContent.load(page);
    }

    $scope.openOrClose = function() {
      if ($scope.mySplitterSide.mode == 'split') {
          $scope.mySplitterSide.close();
      } else {
          $scope.mySplitterSide.open();
      }
    }

}]);



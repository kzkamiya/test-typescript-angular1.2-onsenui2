/// <reference path="../typings/tsd.d.ts" />

var app=angular.module('app', ['onsen', 'dndLists']);

app.controller('AppController', ['$scope', 
    
    function($scope) {

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);


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

ons.ready(function() {
    console.log("Onsen UI is ready!?");  
});


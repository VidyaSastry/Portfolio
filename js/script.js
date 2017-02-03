var myApp = angular.module('portfolio',['ngMessages']);

myApp.controller('mainController',['$scope','$log',function($scope,$log){
  $scope.name = 'Vidya';
  $log.info($scope);
}]);
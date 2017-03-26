// module
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// routes
myApp.config(function ($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "/assets/angular/views/main.htm",
    controller: "mainController"
  })

  .when("/forecast", {
    templateUrl: "/assets/angular/views/forecast.htm",
    controller: "forecastController"
  })
});

// controllers
myApp.controller('mainController', ['$scope', 'cityFinder', function($scope, cityFinder){
  $scope.city = cityFinder.city;

  $scope.$watch('city', function(){
  cityFinder.city = $scope.city;
  });
}]);

myApp.controller('forecastController', ['$scope', 'cityFinder', function($scope, cityFinder){
  $scope.city = cityFinder.city;
  
  $scope.$watch('city', function(){
  cityFinder.city = $scope.city;
  });
}]);

// services
myApp.service('cityFinder', function(){
  this.city = "Chicago";
});
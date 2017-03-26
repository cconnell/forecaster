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
myApp.controller('mainController', ['$scope', function($scope){
  // console.log("first");
}]);

myApp.controller('forecastController', ['$scope', function($scope){
  // console.log("second");

}]);



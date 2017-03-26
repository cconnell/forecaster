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

  .when("/forecast/:days", {
    templateUrl: "/assets/angular/views/forecast.htm",
    controller: "forecastController"
  })
});

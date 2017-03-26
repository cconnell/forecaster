// controllers
myApp.controller('mainController', ['$scope', 'cityFinder', function($scope, cityFinder){
  $scope.city = cityFinder.city;

  $scope.$watch('city', function(){
  cityFinder.city = $scope.city;
  });
}]);

myApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityFinder', function($scope, $resource, $routeParams, cityFinder){
  $scope.city = cityFinder.city;
  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=351f3fe1c21d085f91f5108c39b28909", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000);
  };
  $scope.$watch('city', function(){
  cityFinder.city = $scope.city;
  });
}]);

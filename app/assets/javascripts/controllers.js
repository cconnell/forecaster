// controllers
myApp.controller('mainController', ['$scope', '$location','cityFinder', function($scope, $location, cityFinder){
  $scope.city = cityFinder.city;

  $scope.$watch('city', function(){
    cityFinder.city = $scope.city;
  });
  
  $scope.submit = function(){
    $location.path("/forecast");
  };

}]);

myApp.controller('forecastController', ['$scope', '$routeParams', 'cityFinder', 'weatherService', function($scope,$routeParams, cityFinder, weatherService){
    $scope.city = cityFinder.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
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

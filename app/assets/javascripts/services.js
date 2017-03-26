// services
myApp.service('cityFinder', function(){
  this.city = "Chicago, IL";
});

myApp.service('weatherService', ['$resource', function($resource) {
  this.GetWeather = function(city, days){
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=351f3fe1c21d085f91f5108c39b28909", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    return weatherAPI.get({ q: city, cnt: days });
  };
}]);
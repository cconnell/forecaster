// directives
myApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'assets/angular/directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});
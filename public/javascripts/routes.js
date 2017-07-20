angular.module('website')
  .config(function($routeProvider){
    $routeProvider.when('/about', {
      templateUrl: 'public/templates/about-us/index.html'
    })
    .when('/contact', {
      templateUrl: 'public/templates/contactus/index.html'
    })
    .when('/projects/:pName', {//calling the porjects template with the projectNmae parameter
      templateUrl: 'public/templates/projects/index.html'
    })
    .when('/', {
      templateUrl: 'public/templates/home/index.html'
    })
    .otherwise({ redirectTo: '/'});
  });

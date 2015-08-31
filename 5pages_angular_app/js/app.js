var portfolioApp = angular.module('PortfolioApp',['ui.bootstrap','ngAnimate','ngRoute']);

portfolioApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/',{
    templateUrl:'views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about',{
    templateUrl:'views/about.html',
    controller:'AboutCtrl'
  })
  .when('/myprojects',{
    templateUrl:'views/myprojects.html',
    controller:'MyProjectsCtrl'
  })
  .when('/myexperience',{
    templateUrl:'views/myexperience.html',
    controller:'MyExperienceCtrl'
  })
  .when('/whereigo',{
    templateUrl:'views/whereigo.html',
    controller:'WhereIGoCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

}]);










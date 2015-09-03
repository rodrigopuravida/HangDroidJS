var AddressBookApp = angular.module('AddressBookApp',['ui.bootstrap','ngRoute','sailsResource','ngMessages']);

AddressBookApp.run(function(){
  console.log('AddressBookApp reporting for duty.');
});

AddressBookApp.config(['$routeProvider','$locationProvider','sailsResourceProvider', function($routeProvider, $locationProvider, sailsResourceProvider){

  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about', {
    templateUrl:'/views/about.html',
    controller:'AboutCtrl'
  })
  // .when('/post/new', {
  //   templateUrl:'/views/post/new.html',
  //   controller:'PostNewCtrl'
  // })
  // .when('/post/:id',{
  //   templateUrl:'/views/post/show.html',
  //   controller:'PostShowCtrl'
  // })

  // .otherwise({
  //   templateUrl:'/views/404.html'
  // });


}]);
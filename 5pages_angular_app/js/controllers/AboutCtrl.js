portfolioApp.controller('AboutCtrl',['$scope','$location',function($scope,$location){

  console.log('about controller!',$location.path());

  $scope.goHome = function(){
    // alert("I'm going home...")
    $location.path('/');
  }

}]);


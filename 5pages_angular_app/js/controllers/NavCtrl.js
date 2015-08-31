portfolioApp.controller('NavCtrl',['$scope','$location',function($scope,$location){

  $scope.navCollapsed = true;

  $scope.search = function(){
    // alert('we are searching for '+ $scope.searchTerm);

    $location
    .path('/search')
    .search({q:$scope.searchTerm});

  }

}]);
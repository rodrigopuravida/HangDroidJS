AddressBookApp.controller('HomeCtrl', ['$scope', 'Person', '$modal',function($scope, Person, $modal){

  //   $scope.posts = [];
  //   $scope.orderField='title';


  console.log('Work home controller');

  Person.query().then(function(people) {
    console.log(people);
    $scope.people = people;
  });

  // $scope.deletePost = function(post) {
  //   post.$delete();
  // }

  // $scope.editPost = function(post) {
  //   console.log('EDIT', post);
  //   $modal.open({
  //     templateUrl:'/views/post/editModal.html',
  //     controller: 'PostEditModalCtrl',
  //     resolve: {
  //       editPost: function() {
  //           return post;
  //       }
  //     }
  //   });
  // }


}]);
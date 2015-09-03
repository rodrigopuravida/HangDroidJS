AddressBookApp.controller('HomeCtrl', ['$scope', 'Person', '$modal',function($scope, Person, $modal){

    $scope.people = [];
  //   $scope.orderField='title';


  console.log('Work home controller');

  Person.query().then(function(people) {
    console.log(people);
    $scope.people = people;
  });

  $scope.deletePerson = function(person) {
    person.$delete();
  }

  $scope.editPerson = function(person) {
    console.log('EDIT', person);
    $modal.open({
      templateUrl:'/views/person/editModal.html',
      controller: 'PersonEditModalCtrl',
      resolve: {
        editPerson: function() {
            return person;
        }
      }
    });
  }


}]);
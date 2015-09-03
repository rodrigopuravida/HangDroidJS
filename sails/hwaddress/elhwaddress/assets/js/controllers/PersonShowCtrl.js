AddressBookApp.controller('PersonShowCtrl', ['$scope', 'Person', '$routeParams',function($scope, Person, $routeParams){

    console.log('Show is working');

    $scope.people={};

    Person.get({id: $routeParams.id}).then(function(person) {
      $scope.person = person;
      $scope.contacts = $scope.person.contacts;
    });

    console.log('person with contacts' + $scope.contacts);


}]);
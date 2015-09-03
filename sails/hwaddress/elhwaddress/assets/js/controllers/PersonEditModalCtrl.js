AddressBookApp.controller('PersonEditModalCtrl', ['$scope', '$modalInstance', 'editPerson', function($scope, $modalInstance, editPerson){

  console.log('Person edit mode', editPerson);

  $scope.newPerson={
    firstName:editPerson.firstName,
    lastName:editPerson.lastName,
    notes:editPerson.notes
  };

  $scope.updatePerson = function() {
    editPerson.firstName = $scope.newPerson.firstName;
    editPerson.lastName = $scope.newPerson.lastName;
    editPerson.notes = $scope.newPerson.notes;
    editPerson.$save().then(function() {
      $modalInstance.close();
    });

  }

  $scope.cancel = function() {
    $modalInstance.dismiss();

  }

}])
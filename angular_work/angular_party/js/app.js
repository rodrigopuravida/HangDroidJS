console.log('app.js loaded.');

var myApp = angular.module('PartyApp',['ui.bootstrap','taco-module']);

//myApp.config(function(){   });






myApp.run(function(){
  console.log('angular app started!!');
});

// myApp.controller('Todo',function($scope){
// });
myApp.controller('Todo',['$scope',function($scope){
  $scope.title="My Todo List";
  $scope.taskText='';
  $scope.test = [];
  $scope.errorMsg=false;
  $scope.tasks = [
    {name:'task1',completed:false},
    {name:'task2',completed:true}
  ];

  $scope.removeTask = function(idx){
    // alert('remove task: ' + idx);
    $scope.tasks.splice(idx,1);
  }

  $scope.addTask = function(){
    if($scope.taskText.length > 0){
      $scope.errorMsg = false;
      $scope.tasks.push({
        name: $scope.taskText,
        completed: false
      });
      $scope.taskText = '';
    }else{
      $scope.errorMsg = 'You must enter a task!';
    }
  }




}]);

myApp.controller('Something',['$scope','$log',function($scope,$log){

  $log.info('hello from the todo controller!!!');

  $scope.name = "Lenny";
  $scope.happy = true;
  $scope.clicks = 0;
  $scope.inputColor = '#00FF00';

  $scope.primary = true;
  $scope.small = false;

  $scope.toggleBtn = function(){
    $scope.primary = !$scope.primary;
    $scope.small = !$scope.small;
  }

  $scope.addClick = function(){
    $scope.clicks += 1;
  }

}]);




myApp.controller('authCtrl',['$scope',function($scope){

  $scope.user = {
    email:"",
    password:"",
    password2:""
  };

  // $scope.email="";
  // $scope.password="";
  // $scope.password2="";

  $scope.login = function(){
    console.log('login',$scope.user)
  }

  $scope.signup = function(){
    console.log('signup',$scope.user)
  }

}]);









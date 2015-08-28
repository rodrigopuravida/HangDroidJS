angular.module('taco-module',[])



.directive('likeButton', function() {

 return {
   restrict: 'E',
   scope: {
    startingValue: '=?'
   },
   controller: ['$scope', '$element', function($scope,$element){
    $scope.startingValue = 5;
     $scope.clicks = $scope.startingValue;
    console.log($scope)

     $scope.addClick = function(){
       $scope.clicks += 1;
     }

     console.log('likeButton directive')
   }],
   template:'<button type="button" class="btn btn-primary" ng-click="addClick()"> Click me {{clicks}} </button>',
   replace: true,
   transclude: true
 };
})

.directive('weather', function() {
 return {
  restrict: 'E',
  scope: {
   location: '=?'
  },
  controller: ['$scope', '$http', function($scope,$http){
   $scope.location = 'Seattle, WA';
   console.log($scope.location)
     $http({
       url:'http://api.openweathermap.org/data/2.5/weather',
       params:{
         q:$scope.location,
         units: 'imperial'
        }
     }).success(function(data){
        console.log(data.weather[0]);
        console.log(data);
        $scope.weather = data.main.temp;
        $scope.city = data.name;

     });

   }],
      template:'<ul><li>{{weather}}</li><li>{{city}}</li></ul>',
      replace: true,
      transclude: true
 }
})




//<image-toggle></image-toggle>
.directive('imageToggle',function(){

  return {
    restrict: 'EA',
    // @  =  &
    scope: {
      onImageUrl:'@on',
      offImageUrl:'@off',
      state:'=?'
    },
    controller: ['$scope','$element',function($scope,$element){
      // $scope.state = true;

      $scope.$watch('state',function(){
        var whichImage = $scope.state ? $scope.onImageUrl : $scope.offImageUrl;
        $element.attr('src',whichImage);
      });

      $scope.toggleState = function(){
        $scope.state = !$scope.state;
        // console.log($scope.state)
      }
    }],
    replace: true,
    template: '<img src="" ng-click="toggleState()">'
  }

})

.directive('well', function(){
  return {
    //A = Attribute <ANY well></ANY
    restrict: 'A',
    link: function(scope, element, attrs){
      console.log(attrs);
      element.addClass('well');
    }
  }
})

.directive('taco',function(){
  return {
    // E = Element  <taco></taco>
    // A = Attribute <ANY taco></ANY>
    // C = Class <ANY class="taco"></ANY>
    restrict:'E',
    controller: ['$scope',function($scope){
      console.log('taco directive... activate!');
      $scope.taco = "Eat a ";
    }],
    template:'<div class="well"><span ng-transclude></span> {{taco}} Taco</div>',
    replace: true,
    transclude: true
  };
})
myApp.filter('properCase', function() {
  return function(input) {
    //stop here on invalid input
    if (!input || !typeof input === 'string') return input;

    return input.split(' ').map(function(word) {
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');

  };
});

myApp.filter('ordinal', function() {
  return function(input) {
    //stop here on invalid input
    if (isNaN(input) || input < 1) return input;

    var secondToLast = parseInt(input / 10) % 10;
    var lastDigit = input % 10;
    var ordinal = 'th';
    if (secondToLast != 1) {
      switch (lastDigit) {
        case 1:
          ordinal = 'st';
          break;
        case 2:
          ordinal = 'nd';
          break;
        case 3:
          ordinal = 'rd';
          break;
      }
    }
    return input + ordinal;
  }
});


//basic filter format
myApp.filter('nameOfFilter',function(){

  //inner function
  return function(input){

    //do something to the input here
    var output = input;

    //return result of the filter
    return output;
  }

});

myApp.filter('reverse', function(){

  var reverse = function(word){
    return word.split('').reverse().join('');
  }

  return function(input, preserveWords){
    console.log('input',input, preserveWords);
    if(preserveWords){
      return input.split(' ').map(function(word){
        return reverse(word);
      }).join(' ');
    }else{
      return reverse(input);
    }
  }

});






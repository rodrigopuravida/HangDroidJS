$(function(){

  var generatedWord = $('#generate-word-text');
  var worldLength = $('#word-length-text');
  var guessLetter = $('#guess-letter-text');
  var getTip = $('#get-tip-text');
  var letterCount;
  var theWord;
  var winCheckCounter;
  var hangingCounter;
  var hanging = false;
  var minCorpusCount;
  var minDictionaryCount;

  var letterDisplay = $('#show-letters');
  var arraySynomins = [];
  var tipCounter = 0;


  $('#getTip').prop('disabled', true);
  $('#checkLetter').prop('disabled', true);
  $('#word-length-button').prop('disabled', true);

  $('#generate-word-text').hide();
  //for testing purposes so that I can see the word
  //$('#generate-word-text').show();


  //selects level of play
  $('.dropdown-menu li').click(function(e){
  e.preventDefault();
  var selected = $(this).text();
  $('#level-text').val(selected);
  $('#word-length-button').prop('disabled', false);
  $('.dropdown-toggle').prop('disabled', true);

  switch($('#level-text').val()){
     case 'Easy':
       minCorpusCount = 20000;
       minDictionaryCount = 20;
       break;
       case 'Medium':
       minCorpusCount = 5000;
       minDictionaryCount = 5;
       break;
       case 'Craziness':
       minCorpusCount = 1000;
       minDictionaryCount = 5;
       break;
       case 'There is just no way':
       minCorpusCount = 100;
       minDictionaryCount = 2;
       break;
       default:
        minCorpusCount = 20000;
        minDictionaryCount = 20;
       break;
   }

  });


  //returns the word that is generated - used as callback function
  function returnWord(json, wordLength){
      // console.log(json);
      var word = json["word"];
      console.log(word);
      theWord = word.toLowerCase();
      //console.log(wordLength);
      letterCount = wordLength;
      console.log('LETTER COUNT ' + letterCount);

      //reset
      for (var i = 0; i < 15; i++) {
          //console.log('#letter' + i + '-text');
          $("#letter" + i + "-text").attr("src", "assets/images/Alphabet/blank.png");
          $("#letter" + i + "-text").show();

       }

      // just to display the number of text boxes

     for (var i = (letterCount); i < 15; i++) {
          $('#letter' + i + '-text').hide();

      }

    }



    //returns similar words
    function returnSynonims(jsonArray) {

      console.log(jsonArray);

      if (jsonArray["words"]){
      arraySynomins = jsonArray["words"];
      //console.log(arraySynomins);
      getTip.val(arraySynomins[tipCounter]);

      if (tipCounter >= arraySynomins.length) {
        tipCounter = 0;
      }

      hangingCounter++;

      document.getElementById("droid_image_index").src = "assets/images/droidL" + hangingCounter + ".jpg";

      // splitting into array
      var splitDroidImageSrc = $('#droid').attr('src').split('');
      console.log(splitDroidImageSrc);

      //getting the index for the imgage
      var spliceDroidImagePos = splitDroidImageSrc.splice(6, 1);
      console.log(spliceDroidImagePos);
      var indexNumberImg = Number(spliceDroidImagePos);
      indexNumberImg++;
      console.log(indexNumberImg);

      $("#droid").attr("src","assets/images/droidL" + indexNumberImg + ".jpg");
      if (indexNumberImg >= 8) {
        $('#getTip').prop('disabled', true);
        console.log('You have Lost');
        for (var i = 0; i < 15; i++) {
           $('#letter' + i + '-text').css('background-color' , 'red');
      }
      $('#generate-word-text').show();
        return;
      }
    }

    }


    //generates randomg word via calling API
  $('#generateWord-form').on('submit',function(e){

    hangingCounter = 0;
    winCheckCounter = 0;
    console.log('I clicked to generate form');

    $('#winOrLose').text('PLAY HANGDROID')

      $('#answerRow input').show();



    //location.reload();
    e.preventDefault();
    $('#guess-letter-text').val('');

    //this is how we set the images using jquery
    document.getElementById("droid_image_index").src = "assets/images/droidLBlank.jpg";

    //number of letters in word for var worldLength = $('#word-length-text');

    var guessedLetter = guessLetter.val();
    getTip.val('');

    $('#checkLetter').prop('disabled', false);

    console.log('Iam at counts of ' + minCorpusCount + ' and  ' + minDictionaryCount);

    var url = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=-1&minDictionaryCount=' + minDictionaryCount + '&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=b68d7ebcb9910f3b8700c0b331f02428eb2fc4e009e697928';

    $.getJSON(url,function(wordData){

     returnWord(wordData, wordData.word.length);

      wordToGuess = wordData.word.toLowerCase();

      worldLength.val('Letters in word: ' + wordToGuess.length);

    });

  });


//fucntion that validates the letter input by user
$('#guessWord-form').on('submit',function(e){
  console.log('I am at validate function');
  console.log(letterCount);
  console.log(theWord);
  hanging = true;

    // location.reload(true);
    e.preventDefault();

    //console.log('Im here' + word);
    var guessedLetter = guessLetter.val();
    //console.log(guessedLetter);

    //this is the word generated
    var wordArray = theWord.split("");

    //validation logic
    for (var i = 0; i< wordArray.length; i++) {

      if (guessedLetter === wordArray[i]) {
        console.log('I am at  if because letter did  match' + i);
        console.log('guessed letter ' + guessedLetter);
        winCheckCounter++;
        // $('#letter' + i + '-text').src = guessedLetter + '.png';
        console.log('my id for image ');
          $("#letter" + i + "-text").attr("src", "assets/images/Alphabet/" + guessedLetter + ".png");
        hanging = false;

        //did we win?
        console.log('counter = ' + winCheckCounter);
          if (winCheckCounter === wordArray.length) {

            $('#checkLetter').prop('disabled', true);
            $('#getTip').prop('disabled', true);
              console.log('YOU HAVE WON');
              $('#winOrLose').text('YOU HAVE WON')
          }
      }
    }

        if (hanging) {
            //8 is the number of images for droid
            hangingCounter++;
            console.log(hangingCounter);

                if (hangingCounter === 8) {
                  console.log('I am at  if because i am larger than 8 and should hang');
                  // $("#droid").attr("src","droidL" + hangingCounter + ".jpg");

                  document.getElementById("droid_image_index").src = "assets/images/droidL8.jpg";
                  $('#checkLetter').prop('disabled', true);
                  $('#getTip').prop('disabled', true);
                  console.log('You have Lost');
                  $('#winOrLose').text('YOU HAVE LOST - WORD WAS: ' + theWord.toUpperCase());

                $('#generate-word-text').show();

                  return;
                }

            // url('/assets/droidLBlank.jpg');
            else if (hangingCounter < 8){

                  console.log('I am at else if because counter less than 8 and missed letter');
                  document.getElementById("droid_image_index").src = "assets/images/droidL" + hangingCounter + ".jpg";


              $('#getTip').prop('disabled', false);
            }
       }
       var guessedLetter = guessLetter.val('');
    });




  //function that generates a tip from an array
  $('#getTip-form').on('submit',function(e){

  //http://api.wordnik.com:80/v4/word.json/practice/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
  e.preventDefault();
  console.log(theWord);
  var tipUrl = 'http://api.wordnik.com:80/v4/word.json/' + theWord + '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=b68d7ebcb9910f3b8700c0b331f02428eb2fc4e009e697928';
  $.getJSON(tipUrl,function(tipData){

    var tipArray = [];
    tipArray = tipData[0];
    //console.log(tipData);
    //console.log(tipObject);
    returnSynonims(tipArray);
  });

  });

  //function - play again
  $('#playAgain-form').on('submit',function(e){
    e.preventDefault();
    document.location.reload(true);
    console.log('reloading page');
  });


}); //end document ready
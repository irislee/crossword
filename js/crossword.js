var words = [
  {word: 'oreo',    clue: 'milk\'s favorite cookie'},
  {word: 'hmo',     clue: 'aetna offering'},
  {word: 'utne',    clue: '___ reader'},
  {word: 'egos',    clue: 'they benefit from boosters'},
  {word: 'anti',    clue: 'one in opposition'},
  {word: 'kilo',    clue: 'drug bust quantity, casually'}
];

var numWords  = words.length;

// pick a random num so we can begin with with a random clue
var randNum           = Math.floor((Math.random() * numWords) + 1); 

// choose a prime number larger than the array to iterate through randomly
var prime             = 101;
var gameOver          = false;
var i                 = 0;
var currentWord;
var currentClue;
var currentWordLength;
var inputHTML1        = '<input id="';
var inputHTML2        = '" type="text" name="letter" pattern="[A-Za-z]{1}" maxlength="1" title="" oninput="inputLetter()" onkeyup="nextLetter($(this))">';
var nextButton        = '<button id="nextword" onclick="nextWord()">Next</button>';
var message           = $('#message');
var playAgain         = '<button id="playagain" onclick="beginGame(i)">Play again?</button>';
var buttonArea        = $('#buttonArea');

function beginGame(i){
  var current       = (randNum + prime * i) % numWords;
  currentClue       = words[current].clue;
  currentWord       = words[current].word;
  currentWordLength = currentWord.length;

  $('form').html(''); // clears inputs off page
  message.html('');   // clears message off page
  buttonArea.html('');

  $('#clue').html(currentClue); // show current clue

  // add input boxes for each letter of current word
  for (var j = 0; j < currentWordLength; j++){
    $('form').append(inputHTML1 + j + inputHTML2);
  };

  $('#0').focus();
  $('form').children().attr('onclick', 'value=""');
}

function isWordComplete(){
  var userWordLength = 0;

  for (var i = 0; i < currentWordLength; i++){
    if ($('#' + i)[0].value !== ""){
      userWordLength++;
    }
  }

  if (userWordLength == currentWordLength){
    return true;
  } else {
    return false;
  }
}

function isWordRight(){
  var incorrectWord = false;
  for (var b = 0; b < currentWordLength; b++){
    var currentLetter = $('#'+ b).val();
    if (currentLetter.toLowerCase() != currentWord[b]){
      incorrectWord = true;
    } 
  }

  if (incorrectWord){
    message.html('hmm something\'s not quite right');
    return false;
  } else {
    $('form').children().attr('readOnly', 'true');
    message.html('yay! next word?');
    buttonArea.append(nextButton);
    keyClick('#nextword');
  }
}

function keyClick(id){
  $('input').keyup(function(event){
    if(event.keyCode == 13){
        $(id).click();
    }
  });
}


function nextLetter(currentLetterInput){  
  // if (currentLetterInput !== "" && event.keyCode == 9 && $('input').last()){
  //   $(currentLetterInput).focusout().first().focus();
  //   // console.log('this is first currentLetterInput: ' + $(currentLetterInput).focusout().first().focus());
  // }

  // key codes are A through Z OR right arrow key, move one input to the right 
  if (currentLetterInput !== "" && event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 39){
    $(currentLetterInput).focusout().next().focus();
  }
}

function nextWord(){
  if (i === numWords - 1){
    message.html('you have studied all the words.');
    buttonArea.html('').append(playAgain);
    keyClick('#playagain');
      i = 0;
  } else {
    i++;
    beginGame(i); 
  } 
}

function clearLetter(currentLetterInput){
  currentLetterInput.attr('value', '""');
}

function inputLetter(){
  if (isWordComplete() == true){
    isWordRight();  
  } 
}
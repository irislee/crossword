var words = [
  {word: 'oreo',    clue: 'milk\'s favorite cookie'},
  {word: 'hmo',     clue: 'aetna offering'},
  {word: 'utne',    clue: '___ reader'},
  {word: 'egos',    clue: 'they benefit from boosters'},
  {word: 'anti',    clue: 'one in opposition'},
  {word: 'edam',    clue: 'Dutch cheese'},
  {word: 'htest',   clue: 'thermonuclear experiment of the \'50s'},
  {word: 'nog',     clue: 'Yule quaff'},
  {word: 'hst',     clue: 'f.d.r.\'s successor'},
  {word: 'arlo',     clue: 'singer guthrie'},
  {word: 'tre',     clue: 'one more than due'},
  {word: 'apo',     clue: 'g.i. address'},
  {word: 'ada',     clue: 'nabakov heroine'},
  {word: 'alai',    clue: 'jai ___'},
  {word: 'irae',    clue: '"dies ___"'},
  {word: 'eero',    clue: 'architect saarinen'},
  {word: 'erei',    clue: '"... ___ saw elba"'},
  {word: 'sri',     clue: '___ lanka'},
  {word: 'era',     clue: 'part of q.e.d.'},
  {word: 'dre',     clue: 'rap\'s dr. ___'},
  {word: 'elia',    clue: 'director kazan'},
  {word: 'alee',    clue: 'on the safe side'},
  {word: 'ava',     clue: 'actress gardner'},
  {word: 'argo',    clue: 'jason\s ship'},
  {word: 'asea',    clue: 'confused'},
  {word: 'emu',     clue: 'flightless bird'},
  {word: 'erato',   clue: 'cupid'},
  {word: 'psst',    clue: 'attention getter'},
  {word: 'smee',    clue: 'hook helper'},
  {word: 'stye',    clue: 'eyelid woe'}, 
  {word: 'era',     clue: 'historical period'},
  {word: 'area',    clue: 'zone'},
  {word: 'ere',     clue: 'bard\'s before'},
  {word: 'eli',     clue: 'yale student'},
  {word: 'erie',    clue: 'buffalo\'s lake'},
  {word: 'aloe',    clue: 'natural healer'},
  {word: 'are',     clue: 'you ___ here'},
  {word: 'eden',    clue: 'perfect plot'}, 
  {word: 'ali',     clue: 'the greatest'},
  {word: 'ess',     clue: 'double curve'},
  {word: 'ire',     clue: 'wrath'},
  {word: 'ole',     clue: 'world cup cheer'},
  {word: 'err',     clue: 'slip up'},
  {word: 'ese',     clue: 'language suffix'},
  {word: 'ear',     clue: 'musician\'s gift'},
  {word: 'eel',     clue: 'sushi fish'},
  {word: 'ado',     clue: 'brouhaha'},
  {word: 'spa',     clue: 'sauna locale'},
  {word: 'else',    clue: 'otherwise'},
  {word: 'ante',    clue: 'initial stake'}
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
var hintButton        = '<button id="hint" onclick="needAHint()">hint</button>'
var revealButton      = '<button id="reveal" onclick="revealWord()">reveal</button>'

function beginGame(i){
  var current       = (randNum + prime * i) % numWords;
  currentClue       = words[current].clue;
  currentWord       = words[current].word;
  currentWordLength = currentWord.length;
  var whereWeAt     = (i + 1) + '/' + words.length + ' clues';

  $('form').html('');           // clears inputs off page
  message.html(whereWeAt);      // clears message off page
  buttonArea.html('');          // clears button area

  $('#clue').html(currentClue); // show current clue

  // add input boxes for each letter of current word
  for (var j = 0; j < currentWordLength; j++){
    $('form').append(inputHTML1 + j + inputHTML2);
  };

  buttonArea.html(hintButton);

  $('#0').focus();
  $('form').children().attr('onclick', 'value=""');
}

function needAHint(){
  // if word is empty, show random letter
  if (isWordComplete() == false) {
    var randomIndex = Math.floor((Math.random() * currentWordLength));
    $('#' + randomIndex).val(currentWord[randomIndex]).attr('style', 'font-family: Courier; color: red');
    buttonArea.html('').append(revealButton);
    message.html('');
  } else {
      for (var k = 0; k < currentWordLength; k++){
        var currentLetter = $('#'+ k).val();
        if (currentLetter.toLowerCase() != currentWord[k]){
          $('#' + k).val(currentWord[k]).attr('style', 'font-family: Courier; color: red');
          buttonArea.html('').append(revealButton);
          message.html('');
          break;
      }
    }
  }
}

function revealWord(){
  for (var b = 0; b < currentWordLength; b++){
    var currentLetter = $('#'+ b);
    if (currentLetter.val().toLowerCase() != currentWord[b]){
      currentLetter.val(currentWord[b]).attr('style', 'font-family: Courier; color: red');
    }
  }
  message.html('whew!');
  buttonArea.html('').append(nextButton);
}

function isWordComplete(){
  var userWordLength = 0;

  for (var i = 0; i < currentWordLength; i++){
    if ($('#' + i)[0].value !== ""){
      userWordLength++;
    }
  }

  return userWordLength == currentWordLength; 
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
    buttonArea.html('').append(nextButton);
    userHitsReturn('input', '#nextword');
  }
}

function userHitsReturn(input, id){
  $(input).keyup(function(event){
    if(event.keyCode == 13){
        $(id).click();
    }
  });
}

function nextLetter(currentLetterInput){ 

  // if you hit a key and it's different than what's in the input, replace old value with new value
  if (currentLetterInput.val() !== String.fromCharCode(event.which).toLowerCase() && event.which >= 65 && event.which <= 90){
    currentLetterInput.val(String.fromCharCode(event.which).toLowerCase());
    currentLetterInput.focusout().next().focus();
  } 
  // user inputs a key A through Z OR right arrow key, move one input to the right 
  else if (currentLetterInput.val() !== "" && event.which >= 65 && event.which <= 90 || event.which == 39){
    currentLetterInput.focusout().next().focus();
  }
  // user inputs left arrow key, move one input to the left
  else if (event.which == 37){
    currentLetterInput.focusout().prev().focus();
  }
  // user hits delete, move one input to the right
  else if (event.which == 8){
    currentLetterInput.focusout().prev().focus();
  }
}

function nextWord(){
  if (i === numWords - 1){
    message.html('you have studied all the words!');
    buttonArea.html('').append(playAgain);
    userHitsReturn('input','#playagain');
      i = 0;
  } else {
    i++;
    beginGame(i); 
  } 
}

function inputLetter(){
  if (isWordComplete() == true){
    isWordRight();
  } 
}

userHitsReturn('body', '#beginbutton');
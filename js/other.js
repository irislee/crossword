



// var numWords = words.length;

// // pick a random num so we can begin with with a random clue
// var randNum = Math.floor((Math.random() * numWords) + 1);

// // choose a prime number larger than the array to iterate through randomly
// var prime = 101;

// // BEGIN GAME
// for (var i = 0; i < numWords;) {
  
//   var current = (randNum + prime * i) % numWords;
//   var currentClue = words[current].clue;
//   var currentWord = words[current].word;
//   var currentWordLength = currentWord.length;
//   var inputHTML1 = '<input id="';
//   var inputHTML2 = '" type="text" name="letter" pattern="[A-Za-z]{1}" maxlength="1" title="">';

//   // show current clue
//   $('#clue').html(currentClue);


//   // add input boxes for each letter of current word
//   for (var j = 0; j < currentWordLength; j++){
//     $('form').append(inputHTML1 + j + inputHTML2);
//     console.log('printing i: ' + i);
//     console.log('printing current word ' + currentWord);
//     console.log('printing j: ' + j);
//   }

  // check input letters to current word
    // use a submit button and check after that
    // ...make it 'submit' after last text box is filled


  
  // $('form').submit(function (event){
  //   var guess = false;
  //   event.preventDefault();

  //   // while (guess == false){

  //     var incorrectWord = false;

  //     for (var i = 0; i < currentWordLength; i++){
  //       if ($('#'+ i).val() == currentWord[i]){
  //         // do nothing
  //       } else {
  //         incorrectWord = true;
  //       }
  //     }

  //     if (incorrectWord){
  //       console.log('sorry, something\'s not quite right');
  //     } else {
  //       console.log('yay! next word');
  //       guess = true;
  //     }
  //   // }


  // });

 
  // console.log('end of the loop ' + i);
  
// };


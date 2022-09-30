var timeEl = document.getElementById('count');
var startEl = document.querySelector('#start');
var wordEl = document.querySelector('#word');

var timeLeft 

var wins = 0
var losses = 0
var word 
var wordArray = [];
var keyword = [];
var key 

var wordBank = ["spaghetti", "meatballs", "nicetryguy"];

// TODO: create a start game function
// start timer
// pick a random word from wordbank
// check a keydown event to find if the letters match and to make them display
// return result to win/loss count
function startGame(){
    countdown();
    randWord();
}


// Grabs a random word from the wordbank
function randWord(){
    var numRandom = Math.floor(Math.random()*wordBank.length);
    word = wordBank[numRandom];
    wordArray = word.split;
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        keyword[i] = "_";
    }
    wordEl.textContent = keyword.join(" ");
}

function keydownAction(event) {
    var letter = event.key;
    console.log(letter);
    if (word.toLocaleLowerCase().includes(letter)) {
        console.log("contains");
        for (let i = 0; i < wordArray.length; i++) {
            element = wordArray[i]
            if (letter.toString() == element) {
                keyword[i] = wordArray[i];
            }
        }
        console.log(keyword);
        console.log(wordArray);
        wordEl.textContent = keyword.join(" ");
        if (keyword.length === wordArray.length && keyword.every(function(value, index) { return value === wordArray[index]})) {
            endGame();
        }
    }
}


// function to count down from 10 seconds
function countdown() {
    var timeLeft = 11;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft + " seconds left.";
  
      if(timeLeft === 0) {
        timeEl.textContent = "Time is up!";
        clearInterval(timeInterval);
      }
  
    }, 1000);
    
  }


 startEl.addEventListener("click", startGame);
 document.addEventListener("keydown", keydownAction);
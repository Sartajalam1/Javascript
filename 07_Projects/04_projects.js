let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const lower = document.querySelector(".lower");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// check karenge ki user Valid Number  De raha hai ki nahi ( this is invalid Number"abc,negativNumber(-1), 101 below ")
function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess < 1){
    alert('Please enter a number more than 1')
  }
  else if(guess>100){
    alert('Please enter a number less than 100')
  }
  else{
     prevGuess.push(guess)
     if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
     }
     else{
        displayGuess(guess)
        checkGuess(guess)

     }
  }
}

// Check messages karna hai,nvalid hai to winer.
function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`number is Tooo low`);
  }
  else if(guess > randomNumber){
    displayMessage(`number is Too High`);
  }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML +=`${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// yaha par check karenge ki kya invalid message diya hai, intrect with dom
function displayMessage(message){
    lower.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();

}
function newGame() {
     const newGameButton = document.querySelector('#newGame');
     newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
     });
}
  


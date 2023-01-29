/*
let roundCount = 0
let gameStarted = false
let compVictories = 0
let playerVictories = 0

// prompt user for input and store as var answer, case insensitive //
//let answer = prompt("Rock, paper or scissors ? Let\'s play !").toLowerCase()

let answer = ''

// plays up to 5 round, stops after a player reaches 3 wins, keeps score and display victory messages //
function game() {

    // changes prompt message if it's not the first round //
    if (gameStarted === true) {
        answer = prompt('OK, next round, pick your move !').toLowerCase()
        }

    // function to automatically check if player input is one of three possible moves //
    function checkAnswer(playerMove) {

        if (playerMove === 'rock')
        {
            
            return true
        } else if (playerMove === 'paper') {
            
            return true
        } else if (playerMove === 'scissors') {
            
            return true
        } else {
            return false
        }

    }

    checkAnswer(answer)

    // prompts again until user input is one of three possible moves //
    while (checkAnswer(answer) === false) {
        answer = prompt("Sorry what was that ?").toLowerCase()
        checkAnswer(answer)}

        console.log(`You picked ${answer}!`)


// generate random number between 0 and 2 //
    let diceRoll = Math.floor(Math.random()*(2+1))

    let computerPlay = ''

// picks one of three possible moves for the computer to play, depending and the random number generated //
    if (diceRoll === 0 ) {computerPlay = 'rock'} else if (diceRoll === 1 ) {computerPlay = 'paper'} else if (diceRoll === 2) {computerPlay = 'scissors'}

    console.log(`and I picked ${computerPlay} !`)

//assign number between 0 and 2 to the player's move
    let playerRoll = ''

    if (answer === 'rock') {playerRoll = 0} else if (answer === 'paper') {playerRoll = 1} else if (answer === 'scissors') {playerRoll = 2}

// plays a round //
    function round(playerMove, computerMove) {
        if (((playerMove + 1) % 3) === computerMove) {
            roundCount += 1
            compVictories += 1
            console.log(`Dang, ${computerPlay} beats ${answer}, you lose this round ! You got ${playerVictories} win(s) and I'm at ${compVictories}.`)
            gameStarted = true
            return 'lose'
        } else if (playerMove === computerMove) {
            console.log(`Looks like it's a draw...`)
            gameStarted = true
            return 'draw' 
        } else {
            gameStarted = true
            roundCount += 1
            playerVictories += 1
            console.log(`Round ${roundCount}: See, ${answer} beats ${computerPlay}, you win ! You got ${playerVictories} wins and I'm at ${compVictories}.`)
            return 'win'
        }
    }

    round(playerRoll, diceRoll) 

        
    }

    // let game run until a player reaches 3 wins
/*while ((playerVictories < 3) && (compVictories < 3)) {
    game()
} 
    // if a player reaches 3 win, display win or lose message //
if (playerVictories === 3 ) {console.log('That\'s three wins for you, you win the game !')}
else if (compVictories === 3) {console.log('Three wins for me, you lose the game !')}// prompt user for input and store as var answer, case insensitive // */

//Events

// generate random number between 0 and 2 //
let roundCount = 1;
let gameStarted = false;
let compVictories = 0;
let playerVictories = 0;
let computerPlay = "";
let answer = "";
let playerRoll = "";
let diceRoll = 0;

function round(playerMove, computerMove) {
  if ((playerMove + 1) % 3 === computerMove) {
    roundCount += 1;
    compVictories += 1;

    document.querySelector(
      ".round"
    ).textContent = `Dang, ${computerPlay} beats ${answer}, you lose this round ! You got ${playerVictories} win(s) and I'm at ${compVictories}.`;
    gameStarted = true;
    return "lose";
  } else if (playerMove === computerMove) {
    document.querySelector(".round").textContent = `Looks like it's a draw...`;
    gameStarted = true;
    return "draw";
  } else {
    gameStarted = true;
    roundCount += 1;
    playerVictories += 1;
    document.querySelector(
      ".round"
    ).textContent = `See, ${answer} beats ${computerPlay}, you win ! You got ${playerVictories} wins and I'm at ${compVictories}.`;
    return "win";
  }
}

// selects all buttons
document.querySelectorAll(".button").forEach((element) => {
  //add an event on click for all buttons
  element.addEventListener("click", function (e) {
    //retrieve button content to know which move the player picked
    let ButtonContent = this.textContent;
    answer = ButtonContent.toLowerCase();
    //generates random number in order to pick a move for the computer
    diceRoll = Math.floor(Math.random() * (2 + 1));

    // picks one of three possible moves for the computer to play, depending and the random number generated //
    if (diceRoll === 0) {
      computerPlay = "rock";
    } else if (diceRoll === 1) {
      computerPlay = "paper";
    } else if (diceRoll === 2) {
      computerPlay = "scissors";
    }

    console.log(`and I picked ${computerPlay} !`);

    //assign number between 0 and 2 to the player's move
    if (answer === "rock") {
      playerRoll = 0;
    } else if (answer === "paper") {
      playerRoll = 1;
    } else if (answer === "scissors") {
      playerRoll = 2;
    }

    round(playerRoll, diceRoll);

    document.querySelector(
      ".tally"
    ).textContent = `V = ${playerVictories} / D = ${compVictories}`;

    if (roundCount > 1) {
      document.querySelector(
        ".roundCounter"
      ).textContent = `Round ${roundCount} : Pick your next move!`;
    }

    if (playerVictories === 3) {
      document.querySelector(".victory").textContent =
        "That's three wins for you, you win the game !";
    } else if (compVictories === 3) {
      document.querySelector(".victory").textContent =
        "Three wins for me, you lose the game !";
    }
  });
});

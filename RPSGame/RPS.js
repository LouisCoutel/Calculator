// set global variables and dom elements
let roundCount = 1;
let compVictories = 0;
let playerVictories = 0;
let computerPlay = "";
let answer = "";
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//main RPS game function

function round(playerMove, computerMove) {
  /* RPS rules are as follow : if you assign consecutive numbers to each move (here: rock = 0, paper = 1, scissors = 2)
  if the moves selected by the players are consecutive, the move with the bigger number assigned wins.
  If they are not consecutive, the move with the smaller assignated number wins.*/

  // check if it's a tie and displays related text
  if (playerMove == computerMove) {
    document.querySelector(".round").textContent = `Looks like it's a draw...`;

    //Checks for case where the computer wins :
    //(consecutive numbers and bigger number for the computer) or (non-consecutive numbers and smaller number for the computer)
  } else if (
    (Math.abs(playerMove - computerMove) === 1 && playerMove < computerMove) ||
    (Math.abs(playerMove - computerMove) !== 1 && playerMove > computerMove)
  ) {
    roundCount += 1;
    compVictories += 1;
    document.querySelector(
      ".round"
    ).textContent = `Dang, ${computerPlay} beats ${answer}, you lose this round !`;

    //If it's not a tie and the computer didn't win the round, the player wins
    //Displays related text
  } else {
    roundCount += 1;
    playerVictories += 1;
    document.querySelector(
      ".round"
    ).textContent = `See, ${answer} beats ${computerPlay}, you win !`;
  }

  //displays updated player wins counter
  document.querySelector("p.wins").textContent = `${playerVictories}`;
  //displays updated player losses counter
  document.querySelector("p.losses").textContent = `${compVictories}`;

  //updates the round counter
  if (roundCount > 1) {
    document.querySelector(
      ".round-counter"
    ).textContent = `Round ${roundCount}`;
  }
  // display win or loss message
  setTimeout( function displayEndGameText() {
  if (playerVictories === 3) {
    document.querySelector(".victory").textContent =
      "That's three wins for you, you win the game! Let's start over!";
  } else if (compVictories === 3) {
    document.querySelector(".victory").textContent =
      "Three wins for me, you lose the game! Let's start over!";
  }
}, 3000)

  //Starts countdown before resetting game
  if (playerVictories === 3 || compVictories === 3) {
    setTimeout(function () {
      document.querySelector(".countdown").textContent = "3...";
    }, 4000);
    setTimeout(function () {
      document.querySelector(".countdown").textContent = "2...";
    }, 5000);
    setTimeout(function () {
      document.querySelector(".countdown").textContent = "1...";
    }, 6000);

    //resets game
    setTimeout(function restartGame() {
      roundCount = 1;
      compVictories = 0;
      playerVictories = 0;
      document.querySelector("p.wins").textContent = "0";
      document.querySelector("p.losses").textContent = "0";
      document.querySelector(".round-counter").textContent = "Round 1";
      document.querySelector(".victory").textContent = "";
      document.querySelector(".countdown").textContent = "";
      document.querySelector(".round").textContent = "Pick a move";
    }, 5000);
  }
}

//add an event on click for each button
rock.addEventListener("click", function () {
  //assign value to answer based on button clicked
  answer = "rock";
  let playerMove = 0;

  //generates random number in order to pick a move for the computer
  let computerMove = Math.floor(Math.random() * (2 + 1));
  // picks one of three possible moves for the computer to play, depending and the random number generated //
  if (computerMove === 0) {
    computerPlay = "rock";
  } else if (computerMove === 1) {
    computerPlay = "paper";
  } else if (computerMove === 2) {
    computerPlay = "scissors";
  }

  round(playerMove, computerMove);
});

paper.addEventListener("click", function () {
  answer = "paper";
  let playerMove = 1;

  //generates random number in order to pick a move for the computer
  let computerMove = Math.floor(Math.random() * (2 + 1));
  // picks one of three possible moves for the computer to play, depending and the random number generated //
  if (computerMove === 0) {
    computerPlay = "rock";
  } else if (computerMove === 1) {
    computerPlay = "paper";
  } else if (computerMove === 2) {
    computerPlay = "scissors";
  }

  round(playerMove, computerMove);
});

scissors.addEventListener("click", function () {
  answer = "scissors";
  let playerMove = 2;

  //generates random number in order to pick a move for the computer
  let computerMove = Math.floor(Math.random() * (2 + 1));
  // picks one of three possible moves for the computer to play, depending and the random number generated //
  if (computerMove === 0) {
    computerPlay = "rock";
  } else if (computerMove === 1) {
    computerPlay = "paper";
  } else if (computerMove === 2) {
    computerPlay = "scissors";
  }

  round(playerMove, computerMove);
});

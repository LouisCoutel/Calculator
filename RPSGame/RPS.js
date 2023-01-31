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
  if (playerMove === computerMove) {
    document.querySelector(".round").textContent = `Looks like it's a draw...`;
    gameStarted = true;
    return "draw";
    
  } else if ((playerMove + 1) % 3 === computerMove) {
    roundCount += 1;
    compVictories += 1;

    document.querySelector(
      ".round"
    ).textContent = `Dang, ${computerPlay} beats ${answer}, you lose this round ! You got ${playerVictories} win(s) and I'm at ${compVictories}.`;
    gameStarted = true;
    return "lose";
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
      ".wins"
    ).textContent = `${playerVictories}`;

    document.querySelector(
      ".losses"
    ).textContent = `${compVictories}`;

    if (roundCount > 1) {
      document.querySelector(
        ".roundCounter"
      ).textContent = `Round ${roundCount}`;
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

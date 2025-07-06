console.log("Welcome to play Rock Paper and Scissors!"); //Willkommensnachricht im Terminal

let playerMove = process.argv[2];

// Wenn der spieler nichts eigeben hat 
if (!playerMove) {
  console.log("Please choose Rock, Paper, or Scissors");
  return;
}

console.log("Choose one of the list: Rock, Paper, Scissors! Enjoy your Game");

const choice = ['Rock', 'Paper', 'Scissors'];

// Funktion, die zufällig einen Spielzug für den Computer auswählt
function randomChoice() {
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

const computerMove = randomChoice();

//funktion wenn der Spieler etwas falsh angegebn hat 
function result() {
  if (!choice.includes(playerMove)) {
    console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
    return;
  }

  console.log(`You chose ${playerMove}. Computer chose ${computerMove}`); // Zeigt die Auswahl beider Spieler an

  //  mit if und else statment Vergleicht den Spielzug des Spielers mit dem des Computers und bestimmt, wer gewinnt
  if (playerMove === computerMove) {
    console.log("Draw! You can play again.");
  } else if (
    (computerMove === 'Scissors' && playerMove === 'Paper') ||
    (computerMove === 'Paper' && playerMove === 'Rock') ||
    (computerMove === 'Rock' && playerMove === 'Scissors')
  ) {
    console.log("You lose! Try again.");
  } else {
    console.log("You win!");
  }
}
// Funktion wird aufgerufen, um das Ergebnis zu berechnen
result();

   
  




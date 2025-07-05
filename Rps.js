//welcom to Rock Paper and Scissors  Game !!!
console.log( "Welcom to play Rock Paper and Scissors ")

console.log("choose one of the liste : Rock , Paper , Scissors ! Enjoy your Game");
let playerMove = process.argv[2];
const choice  = [ 'Rock' , 'Paper' , 'Scissors'];
 function randomChoice () {
    const random = Math.floor(Math.random () * choice.length); 
    return choice [ random];
 }
 console.log
 const computerMove = randomChoice () ;
function result() {
   console.log(`You chose ${playerMove}. Computer chose ${computerMove}. You win!`);

 if (playerMove === computerMove) {
    console.log("Draw! You can play again.");
  } else if (
    (computerMove === 'Scissors' && playerMove === 'Paper') ||
    (computerMove === 'Paper' && playerMove === 'Rock') ||
    (computerMove === 'Rock' && playerMove === 'Scissors')
  ) {
    console.log("You lose! Try again.");
  } else if (
    (playerMove === 'Scissors' && computerMove === 'Paper') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Rock' && computerMove === 'Scissors')
  ) {
    console.log("You win!");
  } else {
    console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
  }
  }


result();

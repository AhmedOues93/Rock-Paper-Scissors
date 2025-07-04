//welcom to Rock Paper and Scissors  Game !!!
console.log( "Welcom to play Rock Paper and Scissons ")

console.log("choose one of the liste : Rock , Paper , Scissors ! Enjoy your Game");
let playerMove =  Process.argv.slice(2); //input player choice 
let choice = [ 'Rock' , 'Paper' , 'Scissors']; 
let computerMove  =  choice( math.floor(Math.random() * 3 ));

if ( choice.includes(playerMove));   // test if the player choose one of the right list to play the game 
console.log("please choose one of this liste : [ Rock, Paper, Scissors");
Process.exit();


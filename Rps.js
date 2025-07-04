console.log( "Welcom to play Rock Paper and Scissons ")

let playerMove =  Process.argv.slice(2); //input player choice
let choice = [ 'Rock' , 'Paper' , 'Scissors'];
let computerMove  =  choice( Math.random() * 3 );

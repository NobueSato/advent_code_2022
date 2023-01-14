/* 

Advent of code 2022 - Day 2: Rock Paper Scissors (Answer)

*/ 

const fs = require('fs');                                         // Import the fs module to work with the file system

fs.readFile('./input.txt', "utf8", (err, data)=>{                 // readFile function returns buffer instance if the encoding is not specified
  if (err) throw err;                                             // Throw err if the file cannot be read

  const rounds = data.split("\n");                                // Split txt data at \n. rounds[n][0] is player1, rounds[n][2] is player2
  let sumOfPlayer1 = 0, sumOfPlayer2 = 0;                         // sum score of player1 and player2 

  const gameRules = {
    'X': {'A': 3, 'B': 0, 'C': 6},
    'Y': {'A': 6, 'B': 3, 'C': 0},
    'Z': {'A': 0, 'B': 6, 'C': 3}
  }

  const gameRules2 = {
    'X': {'A': 'Z', 'B': 'X', 'C': 'Y'},
    'Y': {'A': 'X', 'B': 'Y', 'C': 'Z'},
    'Z': {'A': 'Y', 'B': 'Z', 'C': 'X'}
  }

  const option2 = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }


  // Part 1
  for(const round of rounds){
    // Determine each player2's choice
    let player2 = option2[round[2]];
    
    // judge the round
    let resultOfRound = gameRules[round[2]][round[0]];

    // Calculate the score
   sumOfPlayer2 = sumOfPlayer2 + player2 + resultOfRound;

  } // end of for in loop

  sumOfPlayer2 = 0;

  // Part 2
  for(const round of rounds){
    // Determine player2's choice
    let player2choice = gameRules2[round[2]][round[0]];               // X means lose, Y means draw, Z means win
    let player2 = option2[player2choice];
    
    // judge the round
    let resultOfRound = gameRules[player2choice][round[0]];

    // Calculate the score
   sumOfPlayer2 = sumOfPlayer2 + player2 + resultOfRound;
   console.log(`The plan is ${round[2]} so the player2's choice is ${player2choice} and the point is ${player2} + ${resultOfRound} = ${(player2 + resultOfRound)}. culmutive score is ${sumOfPlayer2}`);
  } // end of for in loop

console.log(`Your score is ${sumOfPlayer2}`);
console.log(`You won? ${(sumOfPlayer1 < sumOfPlayer2)}`);

})
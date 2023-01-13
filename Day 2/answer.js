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

  // const option1 = {
  //   'A': 1,
  //   'B': 2,
  //   'C': 3
  // }

  const option2 = {
    'X': 1,
    'Y': 2,
    'Z': 3
  }

  for(const round of rounds){
    // Determine each player's choice
    // let player1 = option1[round[0]];
    let player2 = option2[round[2]];
    
    // judge the round
    let resultOfRound = gameRules[round[2]][round[0]];

    // Calculate the score
   sumOfPlayer2 = sumOfPlayer2 + player2 + resultOfRound;

  } // end of for in loop

console.log(`Your score is ${sumOfPlayer2}`);
console.log(`You won? ${(sumOfPlayer1 < sumOfPlayer2)}`);

})
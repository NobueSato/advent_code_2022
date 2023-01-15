/* 

Advent of code 2022 - Day 3: Rucksack Reorganization (Answer)

*/

const fs = require('fs');                                       // Import the fs module to work with the file system

const priorityScore = {
  'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
  'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26,
  'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35, 'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40, 'O': 41,
  'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52,  
}


fs.readFile('./input.txt', "utf-8", (err, data)=>{
  let priorities = [];                                          // Declare an empty array(priorities)
  let Rucksack = data.split('\n');                              // Split data by \n and store them into an array(Rucksack)
  let score = 0;

  for(const items of Rucksack){
    let separator = items.length / 2;                           // Each compartments has exact same number of items
    let first = items.substring(0, separator);                  // Separate compertments
    let second = items.substring(separator);
    
    // Check the duplicated item and stop if found
    for(let i = 0; i < first.length; i++){
      if(first.indexOf(second[i]) > -1){
        priorities.push(second[i]);
        break;
      } 
    }
  }

  // Calculate the score
  for(const element of priorities){
    score = score + priorityScore[element];
  }
  
  console.log(`The score is ${score}`);
  
  // Part 2
  priorities = [];                                          // Set priorities array to a new empty array (replace the original reference)
  score = 0;                                                // Set score to 0
  for(let i = 0; i < Rucksack.length; i += 3){               // Loop through Rucksack by 3 lines. If it's i + 3, it is being evaluated as an expression, not being assigned back to i.
    for(let j = 0; j < Rucksack[i].length; j++){            // Loop through each sack one by one (char by char)
      if(Rucksack[i + 1].includes(Rucksack[i][j]) && Rucksack[i + 2].includes(Rucksack[i][j]) ){
        priorities.push(Rucksack[i][j]);
        break;
      }
    }
  }

  // Calculate the score
  for(const element of priorities){
    score = score + priorityScore[element];
  }

  console.log(`The score is ${score}`);

})
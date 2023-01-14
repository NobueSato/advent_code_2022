/* 

Advent of code 2022 - Day 3: Rucksack Reorganization (Answer)

*/

// read data
// declare priporities array
// store data into array, first and second pack split them in half. If the line has 16 chars, then 8 char each
// loop through and search through the second pack if the current element of first pack appears in the second pack
// if so store the char into priporities array
// after loop is done, go through priporities array and score the priority and calculate the score

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
    for(let i = 0, done = 0; i < first.length && !done; i++){
      if(first.indexOf(second[i]) > -1){
        priorities.push(second[i]);
        done = 1;
      } 
    }
  }

  // Calculate the score
  for(const element of priorities){
    score = score + priorityScore[element];
  }
  
  console.log(`The score is ${score}`);

})
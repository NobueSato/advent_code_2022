const fs = require('fs');

fs.readFile('./input.txt', "utf-8", (err, data)=>{
  if(err) throw err;

  let craneInstruction = data.split('\n');

  // First, find out how many stacks there are and seprate stacks and instructions
  let numOfStacks = (craneInstruction[0].length + 1) / 4;                       // Each stack occupy 4 spaces including white space and []. The last stack has one less white space, that's why + 1  
  let numOfRows = -1;
  for(const stack of craneInstruction){
    numOfRows++;
    if(stack[1].match(/\d/) > 0){
      break;
    }
  }
  let stacks = craneInstruction.splice(0, numOfRows);                         // Split craneInstruction into 2 parts: stacks and craneInstruction  
  craneInstruction = craneInstruction.splice(2, craneInstruction.length - 1);  

  let organizedStack = Array.from({length: numOfStacks}, () => []); // Initialize organizedStack with numOfStacks number of empty arrays
  for(let i = 0; i < stacks.length; i++){                           // Loop through rows
    let k = 1;
    for(let j = 0; j < numOfStacks; j++){                           // Loop through stacks
      if(stacks[i][k].match(/[A-Z]/)){
        organizedStack[j].push(stacks[i][k]);
      }
      k += 4;                                                       // Every 4 indices has item(char)
    }
  }

  for(const instruction of craneInstruction){
    const match = instruction.match(/move (\d+) from (\d+) to (\d+)/);
    const move = match[1];
    const from = match[2] - 1;
    const to = match[3] - 1;

    console.log(`Move ${move} From ${from + 1} To ${to + 1}`);
    // Please uncomment below for each part
    // Part 1
    // let elementToMove = organizedStack[from].splice(0, move);
    // for(let i = 0; i < elementToMove.length; i++) {
    //   organizedStack[to].splice(0, 0, elementToMove[i]);
    // }

    // Part 2
    // let elementToMove = organizedStack[from].splice(0, move);
    // for(let i = elementToMove.length - 1; i >= 0; i--) {
    //   organizedStack[to].splice(0, 0, elementToMove[i]);
    // }
    
    for(const element of organizedStack){
      console.log(element);
    }
  }
})

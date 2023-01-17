const fs = require('fs');

fs.readFile('./example.txt', "utf-8", (err, data)=>{
  if(err) throw err;

  let craneInstruction = data.split('\n');

  // First, find out how many stacks there are
  // Loop through the array to find the 2nd element of the stack is number
  let numOfStacks = 0;
  for(const stack of craneInstruction){
    if(parseInt(stack[1]) > 0){
      numOfStacks = parseInt(stack[stack.length - 2]);
      break;
    }
  }
  
  let stacks = craneInstruction.splice(0, numOfStacks);          // Split craneInstruction into 2 parts: stacks and craneInstruction
  craneInstruction = craneInstruction.splice(numOfStacks - 1);  
  let numOfRows = stacks.length;                                 // Declare numOfRows and set it to stacks.length

  let organizedStack = [];
  for(let i = 0; i < numOfRows; i++){                            // Loop through rows
    let k = 1;
    for(let j = 0; j < numOfStacks; j++){                        // Loop through stacks
      if(stacks[i][k] != ' '){
        organizedStack[j] = stacks[i][k];
      }
      k += 4;                                                    // Every 4 indice has item(char)
    }
  }

  for(const element of craneInstruction){
    let move = element[5];
    let from = element[12];
    let to = element[17];
    console.log(`Move ${move} from ${from} to ${to}`);
    for(let i = 0; i < organizedStack.length; i++){
      console.log(organizedStack[i]);
    }
  }
})
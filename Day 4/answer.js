/* 

Advent of code 2022 - Day 4: Camp Cleanup (Answer)

*/

const fs = require('fs');                                                                                     // Import the fs module to work with the file system

fs.readFile('./input.txt', "utf-8", (err, data)=>{
  if (err) throw err;                                                                                         // Throw err if the file cannot be read

  const assignments = data.split('\n');                                                                       // Split data by \n and store them into an array(assignments)
  let nthAssignments = 0;                                                                                     // Counter for the iterations
  let assignError1 = 0;                                                                                       // Counter for the assign errors for part 1
let assignError2 = 0;                                                                                         // Counter for the assign errors for part 2
  
  for(const assignment of assignments){
    let elves = assignment.split(',');
    let elf1_start = parseInt(elves[0].slice(0, elves[0].indexOf('-')));                                      // Parse string to integer
    let elf1_end = parseInt(elves[0].slice(elves[0].indexOf('-') + 1));
    let elf2_start = parseInt(elves[1].slice(0, elves[1].indexOf('-')));
    let elf2_end = parseInt(elves[1].slice(elves[1].indexOf('-') + 1));

    console.log(++nthAssignments);                                                                            // Count the number of iterations 
    console.log(`elf 1: ${elf1_start}  -  ${elf1_end}`);
    console.log(`elf 2: ${elf2_start}  -  ${elf2_end}`);

    // Part 1
    // Check if elf1's assignment is fully covered by elf2's assignments and vice versa
    if(elf1_start >= elf2_start && elf1_end <= elf2_end                                                       
      || elf2_start >= elf1_start && elf2_end <= elf1_end){
        assignError1++;                                                                                       // Counter for the assign errors
    }

    // Part 2
    // Check if elf1's assignment is partially or fully covered by elf2's assignments and vice versa
    if(elf1_end >= elf2_start && elf1_end <= elf2_end
      || elf2_start <= elf1_start && elf2_end >= elf1_start
      || elf1_start >= elf2_start && elf1_end <= elf2_end                                                       
      || elf2_start >= elf1_start && elf2_end <= elf1_end){                                 
      assignError2++;                                                                                         // Counter for the assign errors
    }
    
  }

  console.log(`There are ${assignError1} numbers of assignments has fully duplicated assignments`);           // Display the result
  console.log(`There are ${assignError2} numbers of assignments has partially/fully duplicated assignments`); // Display the result

})
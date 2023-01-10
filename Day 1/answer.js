/* 

Advent of code 2022 - Day 1: Calorie Counting (Answer)

*/

const fs = require('fs');                                             // Import the fs module to work with the file system

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;                                                 // Throw err if the file cannot be read
  let numOfMostCal = 0;
  let elfID = 0;
  let sumCal = 0;
  const elfList = [];                                                 // initilize it to empty

  const dataArray = data.toString().split("\n");
  for (const element of dataArray) {
    if (!isNaN(parseInt(element))) {
    sumCal += parseInt(element)
      if (dataArray.indexOf(element) === dataArray.length - 1) {     // if element is the last element, store the value into elfList array
        elfList[elfID] = sumCal;
        if (sumCal > numOfMostCal) {
          numOfMostCal = sumCal;
        }
      }
    } else {
    elfList[elfID] = sumCal;
    if (elfList[elfID] > numOfMostCal) {
    numOfMostCal = elfList[elfID];
    }
    elfID++;
    sumCal = 0;
    }
    }
  console.log(`the highest calories is ${numOfMostCal}`); 
})

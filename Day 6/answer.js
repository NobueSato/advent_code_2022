const fs = require('fs');

fs.readFile('./input.txt', "utf-8", (err, data)=>{
  if(err) throw err;

  // const datastream = data.split('\n');                                             // When read example.txt uncomment this line and
                                                                                      // loop through each element in data through
                                                                                      // Then do line 11 - 18
  const seqLen = 14;

    for (let i = 0; i < data.length - seqLen + 1; i++) {
      const seq = data.slice(i, i + seqLen);
      if (new Set(seq).size === seqLen) {
        let marker = data.indexOf(seq) + seqLen;
        console.log(`Found a unique sequence: ${seq} and the marker is ${marker}`);
        break;
      }
    }

});
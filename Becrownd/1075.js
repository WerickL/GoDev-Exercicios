var input = `3`;
var lines = input.split('\n');

const n = parseInt(lines.shift())
 for (let i = 0; i < 10000; i++) {
  if (i%n === 2) {
    console.log(i);
  }  
 }
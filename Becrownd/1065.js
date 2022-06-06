input = `7
-5
6
-4
12`
var lines = input.split('\n');
let pares= 0;
for (let i=0; i<=4; i++){
  if(parseInt(lines.shift()) % 2 === 0){
      ++pares;
  }
}
console.log(`${pares} valores pares`);
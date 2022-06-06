input = `4
-5
0
3
-4`
var lines = input.split('\n');


const elements = lines.shift();
let output;

/*for(let i = 0; i < Number(elements); ++i){
  if(Number(lines[i]) % 2 === 0){
    output = "EVEN";
  }
  else if(Number(lines[i]) % 2 !== 0){
    output = "ODD"
  }
  positiveOrNegative(Number(lines[i]))
  console.log(output);
}

function positiveOrNegative(valor){
  if (valor > 0) {
    output += " POSITIVE"
  }
  else if (valor < 0){
    output += " NEGATIVE"
  }
  else if (valor === 0){
    output = "NULL"
  }
}*/
for (const item of lines) {
  console.log(typeof item);
  console.log(item>0);
}

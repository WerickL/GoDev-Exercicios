const input = `-5
0
-3
-4
12`

let lines = input.split("\n");
let pares = 0;
let impares = 0;
let pos = 0;
let neg = 0;

for (let i = 0; i< lines.length; i++) {
 
  let elemento = parseInt(lines[i]);
  if (elemento % 2 == 0) {
    ++pares;
  }else{
    ++impares;
  }
  if (elemento > 0) {
    ++pos;
  } else if (elemento < 0){
    ++neg;
  }
  
}lines.forEach(elemento => {
  
});
console.log(`${pares} valor(es) par(es)
${impares} valor(es) impar(es)
${pos} valor(es) positivo(s)
${neg} valor(es) negativo(s)`);

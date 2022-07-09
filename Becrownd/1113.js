var input = `5 4
7 2
3 8
2 2`;
var lines = input.split('\n');

const tamanho  = lines.length
for (let i = 0; i < tamanho; i++) {
  let valores = lines[i].split(" ")
  let inicio = parseInt(valores.shift())
  let fim = parseInt(valores.shift())
  if (inicio < fim) {
    console.log("Crescente");
  } else if(fim < inicio){
    console.log("Decrescente");
  }
  
}

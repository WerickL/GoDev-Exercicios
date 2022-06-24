const input = `71`
var lines = input.split('\n');
let DDDS = [61, 'Brasilia',71, 'Salvador',11, 'Sao Paulo',21, 'Rio de Janeiro', 32, 'Juiz de Fora',19, 'Campinas',27, 'Vitoria',31, 'Belo Horizonte'];
const DDD = parseInt(lines.shift())
if (DDDS.includes(DDD)) {
  let position = DDDS.indexOf(DDD);
  console.log(DDDS[position+1]);
} else {
  console.log("DDD nao cadastrado");
}

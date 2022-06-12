input = `2 3 2 6`
var lines = input.split(' ')
const A = parseInt(lines.shift())
const B = parseInt(lines.shift())
const C = parseInt(lines.shift())
const D = parseInt(lines.shift())
if ((B>C)&&(D>A)&&((C+D)>(A+B))&&((C&&D)>0)&&((A%2)==0)) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
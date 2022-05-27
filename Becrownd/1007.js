input = `5
6
7
8`
var lines = input.split('\n');

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())
let c = parseInt(lines.shift())
let d = parseInt(lines.shift())
diferença = (a*b - c*d)
console.log("DIFERENCA = "+diferença)
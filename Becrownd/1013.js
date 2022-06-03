let A = 7 
let B = 14 
let C = 106

let maiorAB = (A+B+Math.abs(A-B))/2
let maior = (maiorAB+C+Math.abs(maiorAB-C))/2
console.log(`${maior} eh o maior`)
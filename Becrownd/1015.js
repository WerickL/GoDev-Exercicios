input = `1.0 7.0
5.0 9.0`

var lines = input.split('\n');

let p1 = lines[0].split(" ")
let p2 = lines[1].split(" ")

let x1 = parseFloat(p1.shift())
let y1 = parseFloat(p1.shift())
let x2 = parseFloat(p2.shift())
let y2 = parseFloat(p2.shift())

let distancia = Math.sqrt(((x2 - x1)**2)+((y2 - y1)**2)).toFixed(4)
console.log(distancia);
input = `5.0
6.0
7.0`
var lines = input.split('\n');

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())
let media = (a * 2 + b * 3 + c*5)/ 10
console.log("MEDIA = "+ media.toFixed(1))
input = `5.0
7.1`
var lines = input.split('\n');

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let media = (a * 3.5 + b * 7.5)/ 11
console.log("MEDIA = "+ media.toFixed(5))
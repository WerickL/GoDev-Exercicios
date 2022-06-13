input = `444444999 13`
var lines = input.split(' ');
var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
if (b%a === 0 || a%b === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
const input = `12`
var lines = input.split('\n');

const months = ["January","February","March","April","May","June","July","August","September","October","November","December",]
const month = lines.shift()-1

console.log(months[month]);

input = `-5 -1 7`
var lines = input.split(' ');
const nums = [];
nums.push(parseInt(lines.shift()))
nums.push(parseInt(lines.shift()))
nums.push(parseInt(lines.shift()))
let numsSort = nums.slice();//slice pra não copiar a referencia
numsSort = numsSort.sort((a,b)=>{return a-b});//sort sem função pega caractere
numsSort.forEach(num => {
  console.log(num);
});
console.log();
nums.forEach(num => {
  console.log(num);
});



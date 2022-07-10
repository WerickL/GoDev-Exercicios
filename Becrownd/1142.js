let input = `7`
let lines = input.split("\n")
let cont = 0;
for (let i =  0; i < parseInt(lines[0]); i++){
  console.log(`${++cont} ${++cont} ${++cont} PUM`);
  ++cont;
}
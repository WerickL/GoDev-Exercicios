let i = 1;
let j = 7
console.log(`I=${i} J=${j}`);
let c = 1;
while (true) {
  if (c%3 === 0) {
    i +=2;
    j += 4;
  }else{
    --j;
  }
  c++
 

  if (i>9) {
    break
  }
  console.log(`I=${i} J=${j}`);
}
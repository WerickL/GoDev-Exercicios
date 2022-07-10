var input = `2 2
3 -2
-8 0
-7 1
0 2`;
var lines = input.split('\n');
let control = 0;
while (control === 0) {
  let intervalos = lines[0].split(" ");
  lines.shift()
  let x = parseInt(intervalos.shift())
  let y = parseInt(intervalos.shift())

  if (x > 0) {
    if (y>0) {
      console.log("primeiro");
    } else if(y<0){
      console.log("quarto");
    }
    else {
      control = 1;
    }
  } else if(x < 0) {
    if (y>0) {
      console.log("segundo");
    } else if(y<0){
      console.log("terceiro");
    }
    else {
      control = 1;
    }    
  }else{
   control = 1;
  }
}

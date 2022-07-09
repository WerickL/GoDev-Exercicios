//segundo valor recebe +1 e cada 2 ele dobra o salto (começando com 2)
let input = `999`
const lines = input.split("\n")
let cont = 1;
let val2 = 1;
let val3 = 1;
let salto = 2;
let decrescimo = 0;
for (let i = 1; cont <= parseInt(lines[0]);) {
  console.log(`${cont} ${val2} ${val3}`);
  if (i%2 === 0) {
      cont++;
      val2+=salto;
      val3 = cont*val2;
      salto += 2;
      decrescimo++;
    }else{
      val2++;
      val3 = cont*val2 - decrescimo;
    }
    i++;
}
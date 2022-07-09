const input = `2
3 15
15 3`
let lines = input.split("\n")
const testCases = parseInt(lines.shift())


for (let i = 0; i < testCases; i++) {
  let intervalos = lines.shift().split(" ")
  let inicio = Math.min(intervalos[0], intervalos[1] )
  let final = Math.max(intervalos[0], intervalos[1])
  let sumOdds = 0;
  for (let iN = inicio + 1 ; iN < final; iN++){
    if (iN % 2 != 0) {
      sumOdds += iN
    }
  }
  console.log(sumOdds);
}
let acrescimo = 0;
for (let i = 0, j = 1, c = 0; i <= 2; ) {
  console.log(`I=${Number(i.toFixed(1))} J=${Number(j.toFixed(1))}`);
  ++j
  ++c
  if (c===3) {
    acrescimo += 0.2;
    j = 1+acrescimo;
    i = acrescimo;
    c = 0;
  }
}
const input = `invertebrado
anelideo
hematofago`;
const lines = input.split("\n");

if (isAguia(lines)) {
  console.log("aguia");
}else if (isPomba(lines)) {
  console.log("pomba");
}else if (isHomem(lines)) {
  console.log("homem");
}else if (isVaca(lines)) {
  console.log("vaca");
}else if (isPulga(lines)) {
  console.log("pulga");
}else if (isLagarta(lines)) {
  console.log("lagarta");
}else if (isSanguessuga(lines)) {
  console.log("sanguessuga");
}else if (isMinhoca(lines)) {
  console.log("minhoca");
}

function isAguia(list) {
  if (list.includes(`vertebrado`)
  & list.includes(`ave`)
  & list.includes(`carnivoro`)) {
    return 1;
  }else return 0;
}
function isPomba(list) {
  if (list.includes(`vertebrado`)
  & list.includes(`ave`)
  & list.includes(`onivoro`)) {
    return 1;
  }else return 0;
}
function isHomem(list) {
  if (list.includes(`vertebrado`)
  & list.includes(`mamifero`)
  & list.includes(`onivoro`)) {
    return 1;
  }else return 0;
}
function isVaca(list) {
  if (list.includes(`vertebrado`)
  & list.includes(`mamifero`)
  & list.includes(`herbivoro`)) {
    return 1;
  }else return 0;
}
function isPulga(list) {
  if (list.includes(`invertebrado`)
  & list.includes(`inseto`)
  & list.includes(`hematofago`)) {
    return 1;
  }else return 0;
}
function isLagarta(list) {
  if (list.includes(`invertebrado`)
  & list.includes(`inseto`)
  & list.includes(`herbivoro`)) {
    return 1;
  }else return 0;
}
function isSanguessuga(list) {
  if (list.includes(`invertebrado`)
  & list.includes(`anelideo`)
  & list.includes(`hematofago`)) {
    return 1;
  }else return 0;
}
function isMinhoca(list) {
  if (list.includes(`invertebrado`)
  & list.includes(`anelideo`)
  & list.includes(`onivoro`)) {
    return 1;
  }else return 0;
}

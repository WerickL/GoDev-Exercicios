var input = `2200
1020
2022
2002`;
var lines = input.split('\n');

while (true) {
  if (lines.shift().trim()==="2002") {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida");
    
  }
}
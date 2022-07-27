//elementos
const botaoAbrirSacola = document.getElementById('abrirSacola')

const body = document.body

let botaoFecharSacola = document.getElementById('fecharSacola');

const sacola = document.getElementById('sacola')


//eventos
botaoFecharSacola.addEventListener('click', fecharSacola)
botaoAbrirSacola.addEventListener('click', abrirSacola)


//funções
function fecharSacola() {
  sacola.classList.remove('visivel')
  body.classList.remove('fixed')
}
function abrirSacola() {
  sacola.classList.add('visivel')
  body.classList.add('fixed')
}
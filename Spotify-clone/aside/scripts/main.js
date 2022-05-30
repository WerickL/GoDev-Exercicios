//Abre e fecha o menu mobile e altera o formato do ícone de menu
//Adicionadod aos links do menu, para ao serem clicados, fechar o menu
const openCloseMenu = () => {
  document.body.classList.toggle('menu-expanded')
  hamburguer.classList.toggle('active')
}
hamburguer.addEventListener('click', openCloseMenu)

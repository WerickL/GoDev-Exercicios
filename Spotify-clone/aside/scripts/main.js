
const menuIsExpanded = () =>{
  document.body.classList.toggle('menu-expanded')
}
const menuIsActive = () =>{
  hamburguer.classList.toggle('active')
}
const openCloseMenu = () =>{
  menuIsActive()
  menuIsExpanded()
}
  hamburguer.addEventListener('click',openCloseMenu)

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}
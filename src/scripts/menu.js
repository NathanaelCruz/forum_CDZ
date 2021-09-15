const screenWidthCurrency = window.screen.width

if(screenWidthCurrency <= 767){

  const buttonOpenCloseMenu = document.querySelector('.c-menu__mobile')
  const menuNavigation = document.querySelector('.l-menu__nav')

  buttonOpenCloseMenu.addEventListener('click', () =>{
    buttonOpenCloseMenu.classList.toggle('is__openMenu')
    menuNavigation.classList.toggle('is__openMenu')
    document.querySelector('.l-menu').classList.toggle('is_extendHeader')
  })

}
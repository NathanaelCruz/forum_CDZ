const data = [
  {
    "god": "Hades",
    "image": "hades.jpg",
    "kingdom": "Submundo",
    "amountCloths": 134,
    "position": "left",
    "link": "#"
  },
  {
    "god": "Atena",
    "image": "atena.jpg",
    "kingdom": "Terra",
    "amountCloths": 219,
    "position": "right",
    "link": "#"
  }
]

const buttonGods = document.querySelector('.c-modal__gods')

const closeMenuMobile = (widthScreen) => {

  if(widthScreen <= 767){

    document.querySelector('.c-menu__mobile').classList.toggle('is__openMenu')
    document.querySelector('.l-menu__nav').classList.toggle('is__openMenu')
    document.querySelector('.l-menu').classList.toggle('is_extendHeader')
  
  }
}

const countDownToAmountCloths = (god, amount) => {

  let speedCountDown = 60
  let countCurrency = 0

  setInterval(function(){

    if(countCurrency <= amount){
      document.querySelector(god + ' .c-god__amountCloth').innerHTML = countCurrency + ' Vestes'
    } else {
      clearInterval()
    }

    countCurrency++

  }, speedCountDown)

}

const activeCountDown = () => {

  setTimeout(function(){
    data.forEach(function(god){
      countDownToAmountCloths('.c-god__' + god.position, god.amountCloths)
    })
  }, 1200)

}

const factoryHTMLModalGods = () => {
  const godsTitle = 'Deuses'

  let godsHTML = [
    '<ul class="c-modal__godBody">'
  ]

  data.forEach(function(god){

    let godHTML = [
      '<li class="c-god">',
      '<a href="' + god.link + '" class="c-god__link text-white">',
      '<figure class="c-god__content">',
      '<img src="src/assets/images/' + god.image + '" alt="' + god.god + '" class="c-god__image" />',
      '<figcaption class="c-god__info c-god__' + god.position + '">',
      '<p class="c-god__kingdom">' + god.kingdom + '</p>',
      '<h3 class="c-god__name">' + god.god + '</h3>',
      '<strong class="c-god__amountCloth">0 Vestes</strong>',
      '</figcaption>',
      '<i class="cp cp-stars c-god__icon' + god.position + '"></i>',
      '</figure>',
      '</a>',
      '</li>'
    ]

    godsHTML.push(godHTML.join(''))

  })

  godsHTML.push('</ul>')
  
  document.querySelector('.c-modal__title').innerHTML = godsTitle

  document.querySelector('.c-modal__content').classList.remove('u-content__awards')
  document.querySelector('.c-modal__content').classList.add('u-content__gods')

  document.querySelector('.c-modal__content').innerHTML = godsHTML.join('')

  activeCountDown()
}

buttonGods.addEventListener('click', function(){

  closeMenuMobile(window.screen.width)

  document.querySelector('.c-modal__dialog').classList.add('c-modal__gods')
  document.querySelector('.c-modal__dialog').classList.remove('c-modal__default')
  document.querySelector('.c-modal').classList.toggle('is__open')

  factoryHTMLModalGods()
})
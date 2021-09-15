const userNew = [
  {
    "name": "Samara",
    "image": "https://www.anime-planet.com/images/characters/moya-85943.jpg",
    "link": "#",
    "icon": "leaf",
    "color": "#8d43d3",
    "cloth": "Dríade"
  }
]

const factoryHTMLUser = (userData) => {

  const elementReference = document.querySelector('.l-statistics__forum')

  const htmlBase = [
    '<figure class="l-statistic__newUser">',
    '<img class="l-newUser__imageRecently" style="border-color: ' + userData.color + ';" src="' + userData.image + '" alt="' + userData.name + '" />',
    '<figcaption class="l-newuser__info">',
    '<i style="background-color: ' + userData.color + ';" class="cp cp-' + userData.icon + '"></i>',
    '<h4 class="l-newuser__name"><a class="l-newuser__link" href="' + userData.link + '">' + userData.name + ' de ' + userData.cloth + '</a><br />',
    '<span class="l-newuser__infoDescription">Novo Usuário</span></h4>',
    '</figcaption></figure>'
  ]

  elementReference.insertAdjacentHTML('beforebegin', htmlBase.join(''))

}

window.addEventListener('load', function(){

  factoryHTMLUser(userNew[0])

})
import {randomFunctionSelectGroupId, validateColorGroup} from './geralFunctions.js'

const usersConnected = [
  {
    "name": "HeartX",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "NobuNaga",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Víbora Radiante",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Nyu",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "AquaMoon",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Golden K",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Origami",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Zeo Tempus",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Baltas",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Cecil",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  }
]

const factoryHTMLUserConnectionOn = (user, separator) => {

  const htmlBaseUserItem = [
    '<li class="c-userconnection__info">',
    '<a class="c-userconnection__link" style="color: ' + validateColorGroup(user.groupId) + ';" href="' + user.link + '">',
    user.name,
    '</a>' + separator +'</li>'
  ]

  return htmlBaseUserItem.join('')

}

const generateUsersConnectionOnList = (usersConnect) => {

  const elementListDad = document.querySelector('.l-usersconnection__list')
  let htmlBase = [
    '<li class="c-userconnection__info c-userconnection__first">',
    '<i class="cp cp-stars"></i>',
    '</li>'
  ]

  usersConnect.forEach((userConnect, index) => {

    let separator = index < usersConnect.length - 2 ? ', ' : index == usersConnect.length - 
    2 ? ' e ' : '.'

    htmlBase.push(factoryHTMLUserConnectionOn(userConnect,separator))

  })

  elementListDad.insertAdjacentHTML('beforeend', htmlBase.join(''))

}

window.addEventListener('load', function(){
  generateUsersConnectionOnList(usersConnected)
})
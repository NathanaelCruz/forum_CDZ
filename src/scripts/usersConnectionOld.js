import {randomFunctionSelectGroupId, validateColorGroup} from './geralFunctions.js'


const usersConnectionRecently = [
  {
    "name": "Racha Cuca",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Neid",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Osan",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Henrique Lust",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "AngelX",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Rokko",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Isaque Morph",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Ikki",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "black Thunder",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Roseliaa",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "X1999",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "4Head",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "koldis",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "masterium",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Sherry",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  },
  {
    "name": "Iptios",
    "groupId": randomFunctionSelectGroupId(),
    "link": "#"
  }
]

const factoryHTMLUserConnection = (userData, separator) => {

  const elementListDad = document.querySelector('.l-usersconnection__OldList')
  const htmlBase = [
    '<li class="c-userconnection__oldInfo">',
    '<a class="c-userconnection__oldLink" style="color: ' + validateColorGroup(userData.groupId) + ';" href="' + userData.link + '">',
    userData.name,
    '</a>' + separator + '</li>'
  ]

  elementListDad.insertAdjacentHTML('beforeend', htmlBase.join(''))

}

const generateHTMLUserConnection = (usersConnection) => {

  usersConnection.forEach((user, index) => {
    let separator = index < usersConnection.length - 2 ? ', ' : index == usersConnection.length - 2 ? ' e ' : '.'
    factoryHTMLUserConnection(user, separator)
  })

}

window.addEventListener('load', function(){
  generateHTMLUserConnection(usersConnectionRecently)
})
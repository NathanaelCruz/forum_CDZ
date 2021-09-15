const usersAwards = [{
  'nick': 'Pãozinho',
  'image': 'https://scontent.fcgh43-1.fna.fbcdn.net/v/t1.6435-9/69476276_1079698032419714_7143194993149083648_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeEwZNykJeqi_EPS7taWKmQwT99D_K02BqZP30P8rTYGpq7j8Tgv26HvKsVchrBc_1u0G6ir9oG6KF80FgdYVROP&_nc_ohc=AHAhBVd9FIkAX-RNR-8&_nc_ht=scontent.fcgh43-1.fna&oh=53a13e43acc25dfb501ced8f56a16d9a&oe=60BDAD3F',
  'category': 'Tema Geral',
  'title-theme': 'O louvor',
  'perfil': '#',
  'post': '#'
},{
  'nick': 'TaleCross',
  'image': 'https://duastorres.com.br/wp-content/uploads/2018/02/Header-2.jpg',
  'category': 'Combate',
  'title-theme': 'O nascimento da nova era',
  'perfil': '#',
  'post': '#'
},{
  'nick': 'Lumen',
  'image': 'https://www.cavzodiaco.com.br/imagens-mangas/nextdimension/22.jpg',
  'category': 'Mais Gracioso',
  'title-theme': 'O amor da aurora',
  'perfil': '#',
  'post': '#'
},{
  'nick': 'Crowley',
  'image': 'https://i.ibb.co/thNCGkH/391801.jpg',
  'category': 'Carisma',
  'title-theme': 'Fazer um novo dia',
  'perfil': '#',
  'post': '#'
},{
  'nick': 'Knucktout 99',
  'image': 'https://uploads.jovemnerd.com.br/wp-content/uploads/2017/10/v-cavaleiros-do-zodiaco-next-dimension-1210x540.jpg',
  'category': 'Atrativo',
  'title-theme': 'O amanhã',
  'perfil': '#',
  'post': '#'
},{
  'nick': 'Dark General',
  'image': 'http://4.bp.blogspot.com/-YY1OlgV8e8o/VLdE3kD4-LI/AAAAAAAACd0/nQMY0uqeFgI/s1600/ares%2B-%2Bsaint%2Bseiya.png',
  'category': 'Participação em Trama',
  'title-theme': 'Alvorecer',
  'perfil': '#',
  'post': '#'
}]

const buttonAwards = document.querySelector('.l-btn__awards')

const formatedString = (str, maxAmount) => {
  return str.length > maxAmount ? str.substr(0, maxAmount - 1) + '...' : str
}

const factoryHTMLUserAward = (user) => {

  let htmlUser = [
    '<li class="c-awards__user m-1">',
    '<section class="c-awards__userCategory">',
    '<p class="c-userCategory__subtitle mb-1">Melhor</p>',
    '<h3 class="c-userCategory__title">' + user.category + '</h3>',
    '<section class="c-userCategory__info">',
    '<h4 class="c-userCategory__titleInfo" title="' + user['title-theme'] + '">' + formatedString(user['title-theme'], 20) + '</h4>',
    '<div class="c-userCategory__links" role="contentinfo">',
    '<a href="' + user.perfil + '" class="c-userCategory__linkPerfil"><i class="cp cp-user"></i>Perfil</a>',
    '<a href="' + user.post + '" class="c-userCategory__linkPost"><i class="cp cp-quote"></i>Post</a>',
    '</div>',
    '</section>',
    '</section>',
    '<img src="' + user.image + '" alt="' + user['title-theme'] + '" class="c-user__image" />',
    '<i class="cp cp-diamond fs-3 u-award__icon"></i>',
    '<p class="u-userAward__name">' + formatedString(user.nick).replace('...', '') + '</p>',
    '<div class="u-bg__overlay"></div>',
    '</li>'
  ]

  return htmlUser.join('')
}


function factoryHTMLAwards(awards, edition){

  const awardsTitle = 'Awards'
  const awardsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi, assumenda eos illo repellendus.'

  let htmlComplete = [
    '<div class="c-awards__info" role="contentinfo">',
    '<i class="cp cp-pencils"></i>',
    '<p class="c-awardsInfo__text">' + awardsText + '</p>',
    '<strong class="c-awardsInfo__edition">' + edition + '</strong>',
    '</div>',
    '<div class="c-awards__users" role="contentinfo">',
    '<ul class="c-awards__usersList">'
  ]

  awards.forEach(function(user){

    htmlUserAward = factoryHTMLUserAward(user)
    htmlComplete.push(htmlUserAward)

  })

  htmlComplete.push('</div></ul>')
  document.querySelector('.c-modal__title').innerHTML = awardsTitle
  document.querySelector('.c-modal__content').classList.remove('u-content__gods')
  document.querySelector('.c-modal__content').classList.add('u-content__awards')
  document.querySelector('.c-modal__content').innerHTML = htmlComplete.join('')

}

buttonAwards.addEventListener('click', function(){


  document.querySelector('.c-modal__dialog').classList.remove('c-modal__gods')
  document.querySelector('.c-modal__dialog').classList.add('c-modal__default')
  document.querySelector('.c-modal').classList.toggle('is__open')

  factoryHTMLAwards(usersAwards, '1ª Edição')

})

factoryHTMLAwards(usersAwards, '1ª Edição')
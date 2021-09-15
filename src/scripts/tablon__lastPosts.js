const lastPosts = [{
  "user": 'TaleCross',
  "title": 'O Nascimento',
  "datetime": '2021-05-05 21:30'
},{
  "user": 'Edmond de Durandal',
  "title": 'Principio da Guerra',
  "datetime": '2021-05-05 11:30'
},{
  "user": 'Neidhardt',
  "title": 'Reserva de Armadura',
  "datetime": '2021-05-05 09:30'
},{
  "user": 'Garruk',
  "title": 'Juramento a Deusa',
  "datetime": '2021-05-05 09:13'
},{
  "user": 'Neidhardt',
  "title": 'Avaliação de Ficha',
  "datetime": '2021-05-05 18:30'
},{
  "user": 'TaleCross',
  "title": 'O Nascimento',
  "datetime": '2021-05-05 22:30'
},{
  "user": 'TaleCross',
  "title": 'O Nascimento',
  "datetime": '2021-05-05 22:30'
},{
  "user": 'Garruk',
  "title": 'Juramento a Deusa',
  "datetime": '2021-05-05 09:13'
}]

window.addEventListener('load', function(){

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const formatedString = (str, maxAmount) => {
    return str.length > maxAmount ? str.substr(0, maxAmount - 1) + '...' : str
  }

  const formatedDate = (datetime) => {
    let dateTimeFormated = new Date(datetime)
    let dayDateTime = dateTimeFormated.toLocaleDateString('pt-BR', {day: '2-digit'})
    let monthDateTime = dateTimeFormated.toLocaleDateString('pt-BR', {month: 'long'}).capitalize()
    let hourMinutesUnFormated = dateTimeFormated.toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: true}).split(' ')
    let hourMinutes = hourMinutesUnFormated[1].concat(' ' + hourMinutesUnFormated[2])

    return dayDateTime + ' de ' + monthDateTime + ' às ' + hourMinutes
  }

  const factoryHTML = (userName, titlePost, datetimePost) => {
    let classesItemList = 'l-lastPosts__listItem mb-3'
    let classesItemListIcon = 'cp cp-pencil u-icon-post'
    let classesItemListTitlePost = 'l-listItem__title p-1'
    let classesItemListTitlePostagem = 'l-listItem__userPost pe-2'

    let elementDad = document.querySelector('.l-lastPosts__list')

    let listItem = '<li class="' + classesItemList + '" title="' + titlePost + ' por ' + userName + '">'
    let listItemIcon = '<i class="' + classesItemListIcon + '"></i>'
    let listItemTitle = '<h4 class="' + classesItemListTitlePost + '"><a href="#">' + formatedString(titlePost, 15) + '</a></h4>'
    let listItemPostagem = '<p class="' + classesItemListTitlePostagem +'"><time datetime="' + datetimePost +'">' + formatedDate(datetimePost) + '</time> por <strong>' + userName +'</strong></p>'
    let listItemClose = '</li>'
    listItem += listItemIcon + listItemTitle + listItemPostagem + listItemClose

    elementDad.insertAdjacentHTML('beforeend', listItem)
  }

  lastPosts.forEach(function(post){
    factoryHTML(post.user, post.title, post.datetime)
  })

})
const dataStatistics = [
  {
    "nameStatistic":"Visitantes",
    "counter": 230,
    "className": "l-forum__visitors",
    "icon": "briefcase"
  },
  {
    "nameStatistic":"Usuários",
    "counter": 123,
    "className": "l-forum__logins",
    "icon": "user"
  }
]

const factoryHTMLStatistics = (statistic) => {

  let htmlBaseStatistic = [
    '<li class="c-statistics__forumItem ' + statistic.className + '">',
    '<div class="c-statistics__forumItem__content" role="contentinfo">',
    '<i class="cp cp-' + statistic.icon + '"></i>',
    '<strong class="c-forum__numbers">' + statistic.counter + '</strong>',
    '<p class="c-forum__label">' + statistic.nameStatistic + '</p>',
    '</div></li>'
  ]

  return htmlBaseStatistic.join('')

}

const generateHTMLStatistics = (statistics) => {

  const elementDadStatistics = document.querySelector('.l-statistics__forum')
  let htmlBase = []

  statistics.forEach(statistic => {
    htmlBase.push(factoryHTMLStatistics(statistic))
  })

  elementDadStatistics.insertAdjacentHTML('beforeend', htmlBase.join(''))

}

window.addEventListener('load', function(){

  generateHTMLStatistics(dataStatistics)

})
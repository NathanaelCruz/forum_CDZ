const groupsData = [
  {
    "name": "Administradores",
    "background": "#951608",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Deuses",
    "background": "#d5142d",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Semi Deuses",
    "background": "#471190",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Kamuis",
    "background": "#4143c3",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Representantes",
    "background": "#19721c",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Juízes",
    "background": "#672f7a",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Ouros",
    "background": "#f0c23d",
    "color": "var(--black-10)",
    "link": "#"
  },
  {
    "name": "Prata",
    "background": "#bab0a8",
    "color": "var(--black-10)",
    "link": "#"
  },
  {
    "name": "Estrelas Celestes",
    "background": "#8d43d3",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Bronze",
    "background": "#da5a2b",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Estrelas Terrenas",
    "background": "#bd196d",
    "color": "var(--white)",
    "link": "#"
  },
  {
    "name": "Sonotas",
    "background": "#049195",
    "color": "var(--white)",
    "link": "#"
  }
]

window.addEventListener('load', function(){

  const groupsList = document.querySelector('.l-groups__list')

  const factoryHTMLGroups = (group) => {

    const htmlBase = [
      '<li class="c-group__item" style="background-color: ' + group.background + '">',
      '<a class="c-group__link" href="' + group.link + '" style="color: '+ group.color +'">' + group.name + '</a>',
      '</li>'
    ]

    groupsList.insertAdjacentHTML('beforeend', htmlBase.join(''))

  }

  const factoryGenerator = (groups) => {

    groups.forEach(group => {
      factoryHTMLGroups(group)
    })

  }

  factoryGenerator(groupsData)

  if(window.screen.width < 1000){

  new Glider(groupsList, {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  }

})
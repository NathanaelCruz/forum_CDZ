const associateData = [
  {
    "name": "TMOL",
    "image": "https://www.einerd.com.br/wp-content/uploads/2014/12/Cavaleiros_do_Zodiaco.jpg",
    "link": "#"
  },
  {
    "name": "Saint War",
    "image": "https://geekquantico.com.br/wp-content/uploads/2019/11/Os-Cavaleiros-dos-Zod%C3%ADaco-Capa.jpg",
    "link": "#"
  },
  {
    "name": "Awakening",
    "image": "https://sm.ign.com/t/ign_br/screenshot/default/blob-fzgv_wez2.1200.jpg",
    "link": "#"
  },
  {
    "name": "Angel Furios",
    "image": "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1497657100708-U0BIYJEKVN0AGCWUA8VP/ke17ZwdGBToddI8pDm48kDTwGrgXHHgc3aXQcBloQWx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UR_Hy-H04t-Dl2fWYULRwmLa9-Erc4RUSmDvWCBq5DTUneelgcUDU6KclUXm97XA3Q/162810.jpg",
    "link": "#"
  },
  {
    "name": "Loves Room",
    "image": "https://i.pinimg.com/736x/0b/49/01/0b4901e01d2a857988d397c9a4120f78.jpg",
    "link": "#"
  },
  {
    "name": "Txavem",
    "image": "https://coverfiles.alphacoders.com/151/thumb-15190.jpg",
    "link": "#"
  },
]

window.addEventListener('load', function(){

  const associateList = document.querySelector('.l-associates__list')

  const factoryHTMLAssociate = (associate) => {
    const htmlBase = [
      '<li class="c-associate__item">',
      '<a class="c-associate__link" href="' + associate.link + '" title="' + associate.name + '">',
      '<img src="' + associate.image + '" alt="Parceiros" class="c-associate__image" />',
      '</a></li>'
    ]

    associateList.insertAdjacentHTML('beforeend', htmlBase.join(''))

  }

  const factoryGenerate = (associateList) => {

    associateData.forEach(associate => {
      factoryHTMLAssociate(associate)
    })

  }

  factoryGenerate(associateData)

  new Glider(associateList, {
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
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });

})
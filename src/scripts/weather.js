
const validateWeather = () => {

  fetch('https://api.weatherapi.com/v1/current.json?key=345e101567d04d5d91b232452211105&q=São Paulo&lang=pt&aqi=no').then((resp) => resp.json()).then(function(data){

    document.querySelector('.l-weather__text').innerHTML = data.current.temp_c + '°'
    document.querySelector('.l-weather__condition').innerHTML = data.current.condition.text + '.'

  })

}


const validateTime = () => {

  const dateTime = new Date()
  let salutation = (dateTime.getHours() >= 6 && dateTime.getHours() < 12) ? 'Bom Dia, ' : (dateTime.getHours() >= 12 && dateTime.getHours() < 18 ) ? 'Boa Tarde, ' : 'Boa Noite, ' 
  salutation += 'seja bem-vindo!'

  const iconMain = document.querySelector('.l-weather__main')
  const iconCloud = document.querySelector('.l-weather__cloudIcon')

  if(dateTime.getHours() >= 6 && dateTime.getHours() <= 18){
    iconMain.classList.add('cp-sun')
    iconCloud.classList.add('u-icon__sun')
  } else {
    iconMain.classList.add('cp-moon')
    iconCloud.classList.add('u-icon__moon')
  }
  
  document.querySelector('.l-weather__salution').innerHTML = salutation

}

validateTime()
validateWeather()
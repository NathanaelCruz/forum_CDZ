const buttonTablonMenus = document.querySelectorAll('.l-btn__tablon')
const buttonTabMain = document.querySelector('.l-btn__tablonMain')
const buttonTabStaff = document.querySelector('.l-btn__tablonStaff')
const buttonTabExtraInfo = document.querySelector('.l-btn__tablonExtraInformation')
const buttonSectionLastPosts = document.querySelector('.c-section__lastPosts')
const buttonSectionNewUsers = document.querySelector('.c-btn__closeNewUser')

function showInformationTabs(tabShow){
  document.querySelectorAll('.l-tablon__contentRight > div').forEach(tablon => {
    tablon.classList.remove('is_visible')
  })

  document.querySelector(tabShow).classList.add('is_visible')
}

buttonTablonMenus.forEach(button => {
  button.addEventListener('click', function(){
    buttonTablonMenus.forEach(buttonSelected => {
      buttonSelected.classList.remove('is_selected')
    })
    button.classList.add('is_selected')
  })
})

buttonTabMain.addEventListener('click', function(){
  showInformationTabs('.l-tablon__mainContent')
})

buttonTabStaff.addEventListener('click', function(){
  showInformationTabs('.l-tablon__staff')
})

buttonTabExtraInfo.addEventListener('click', function(){
  showInformationTabs('.l-tablon__extraInfos')
})

buttonSectionLastPosts.addEventListener('click', function(){
  
  document.querySelector('.l-mainContent__lastPosts').classList.toggle('is_extends')
  document.querySelector('.c-btn__toogleSection > i').classList.toggle('u-rotate-45')

})

buttonSectionNewUsers.addEventListener('click', function(){

  document.querySelector('.l-extraInfo__newUsers').classList.toggle('is_open')
  document.querySelector('.c-btn__closeNewUser > i').classList.toggle('u-rotate-45')

})

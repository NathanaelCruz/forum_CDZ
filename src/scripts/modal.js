const buttonModal = document.querySelector('.c-btn__modal')
const modal = document.querySelector('.c-modal')

buttonModal.addEventListener('click', function(){
  document.querySelector('.c-modal').classList.toggle('is__open')
})

document.addEventListener('keyup', function(event){

  if(event.code == 'Escape' && document.querySelector('.c-modal').classList.contains('is__open')){
    document.querySelector('.c-modal').classList.toggle('is__open')
  }
 
})
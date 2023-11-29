//Hide Sticky Footer - Index.html

const close_button = document.querySelector('.close_button')
const stickyFooterContainer = document.querySelector('.sticky_footer_container')

close_button.addEventListener('click', function(){
  close_button.classList.toggle('active')
  stickyFooterContainer.classList.toggle('active')

});




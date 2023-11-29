const searchContainer = document.querySelector('.sidebar-search-container')
const HideSearch = document.querySelector('.sidebar-search-text')
const closeSearch = document.querySelector('.close-search-text')
const closeButton = document.querySelector('.close-btn')
const searchInput = document.querySelector('.search-input')

searchContainer.addEventListener('click', function(){
  searchContainer.classList.toggle('active')
  HideSearch.classList.toggle('active')
  closeSearch.classList.toggle('active')
  closeButton.classList.toggle('active')
  closeButton.classList.toggle('active')
  searchInput.classList.toggle('active')
});

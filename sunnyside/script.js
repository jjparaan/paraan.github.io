const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    nav.classList.toggle('show-links')
})
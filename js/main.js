const hamburger = document.querySelector('#hamburger')
const hamburgerClose = document.querySelector('#hamburger-close')
const sideNav = document.querySelector('.side-nav')

hamburger.addEventListener('click', () => {
    sideNav.classList.remove('hide-side-nav')
})

hamburgerClose.addEventListener('click', () => {
    sideNav.classList.add('hide-side-nav')
})

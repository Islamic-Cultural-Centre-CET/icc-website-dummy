const hamburger = document.querySelector('#hamburger')
const logoSection = document.querySelector('.logo-section')
const sideNav = document.querySelector('.side-nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    logoSection.classList.toggle('hide-logo-section')
    sideNav.classList.toggle('hide-side-nav')
})

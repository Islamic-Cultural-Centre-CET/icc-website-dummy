const hamburger = document.querySelector('#hamburger')
const hamburgerClose = document.querySelector('#hamburger-close')
const sideNav = document.querySelector('.side-nav')
const navList = document.querySelector('#nav-list').children

hamburger.addEventListener('click', () => {
    sideNav.classList.remove('hide-side-nav')
})

hamburgerClose.addEventListener('click', () => {
    sideNav.classList.add('hide-side-nav')
})

Object.values(navList).forEach((item) => {
    item.addEventListener('click', () => {
        sideNav.classList.add('hide-side-nav')
    })
})

document.querySelector('.animation').classList.remove('hide-animation')
window.onload = () => {
    document.querySelector('.animation').classList.add('hide-animation')
}

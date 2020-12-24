const hamburger = document.querySelector('#hamburger')
const hamburgerClose = document.querySelector('#hamburger-close')
const sideNav = document.querySelector('.side-nav')
const expolreMore = document.querySelector('.explore-more')
const readMoreButton = document.querySelector('#read-more')
const readMoreContent = document.querySelector('#more-content')
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

window.onscroll = () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop
    expolreMore.style.display = scroll > 100 ? 'none' : 'block'
}

readMoreButton.addEventListener('click', () => {
    if (readMoreButton.textContent === 'READ MORE') {
        readMoreButton.textContent = 'READ LESS'
        readMoreContent.style.display = 'inline'
    } else {
        readMoreButton.textContent = 'READ MORE'
        readMoreContent.style.display = 'none'
    }
})

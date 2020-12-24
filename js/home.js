const expolreMore = document.querySelector('.explore-more')
const readMoreButton = document.querySelector('#read-more')
const readMoreContent = document.querySelector('#more-content')

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

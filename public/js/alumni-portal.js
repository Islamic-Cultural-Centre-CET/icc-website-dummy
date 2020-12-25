const explore = document.querySelector('.explore-alumni')

window.onscroll = () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop

    if (scroll > 10) {
        explore.classList.add('hide-explore')
    } else {
        explore.classList.remove('hide-explore')
    }
}

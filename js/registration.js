const alumniRegistration = document.querySelector('#alumni-registration')
const noFormSelected = document.querySelector('#form-not-selected')
const bookCollectionDrive = document.querySelector('#book-collection-drive')
const contributeScholarship = document.querySelector(
    '#contribute-to-scholarship'
)
const applyScholarship = document.querySelector('#apply-scholarship')
const form = document.location.search.replace(/^.*?\=/, '')

switch (form) {
    case 'alumni-registration':
        alumniRegistration.style.display = 'block'
        break
    case 'book-collection-drive':
        bookCollectionDrive.style.display = 'block'
        break
    case 'apply-for-alumni-scholarship':
        applyScholarship.style.display = 'block'
        break
    case 'contribute-to-scholarship':
        contributeScholarship.style.display = 'block'
        break

    default:
        console.log('Hello again default')
        noFormSelected.style.display = 'block'
        break
}

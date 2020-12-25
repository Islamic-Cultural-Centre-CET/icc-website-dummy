const expolreMore = document.querySelector('.explore-more')
const readMoreButton = document.querySelector('#read-more')
const readMoreContent = document.querySelector('#more-content')
const committeeSection = document.querySelector('#committee-details')

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

function itemGenerator(Name, imageName, position, whatsAppNumber) {
    const syntaxOpen = `<div class="swiper-slide swiper-slide-committee"> `
    const syntaxImage = `<img src="assets/other-images/committee/${imageName}" alt="committee" />`
    const syntaxName = `<h1 class="name">${Name}</h1>`
    const syntaxPosition = `<p class="position">${position}</p>`
    const syntaxWhatsapp = `<a href="https://wa.me/91${whatsAppNumber}" class="whatsapp"><i class="fab fa-whatsapp"></i></a>`
    const syntaxClose = `</div>`

    return (
        syntaxOpen +
        syntaxImage +
        syntaxName +
        syntaxPosition +
        syntaxWhatsapp +
        syntaxClose
    )
}

const committeDetails = [
    {
        name: 'Manshau Rahman',
        imageName: 'manshau.jpg',
        position: 'Ameer',
        whatsapp: '9656060131'
    },
    {
        name: 'Muhammed Zameel',
        imageName: 'zameel.jpg',
        position: 'General Secretary',
        whatsapp: '9747884495'
    },
    {
        name: 'Muhammed Ameen CK',
        imageName: 'ameen.jpg',
        position: 'Joint Secretary',
        whatsapp: '7593098481'
    },
    {
        name: 'Nazim',
        imageName: 'nazim.jpg',
        position: 'Joint Secretary',
        whatsapp: '8156808777'
    },
    {
        name: 'Ajmal Labeeb',
        imageName: 'ajmalLabeeb.jpg',
        position: 'Joint Secretary',
        whatsapp: '9745923020'
    },
    {
        name: 'Hadi Abdurazak',
        imageName: 'hadhi.jpg',
        position: "Da'wah Wing",
        whatsapp: '8589951908'
    },
    {
        name: 'Shanif P',
        imageName: 'shanif.jpg',
        position: 'Mess Director',
        whatsapp: '9847756280'
    },
    {
        name: 'Basim M',
        imageName: 'basim.jpg',
        position: 'Mess Director',
        whatsapp: '9496902959'
    },
    {
        name: 'Abdul Haseeb',
        imageName: 'haseeb.jpg',
        position: 'Mess Director',
        whatsapp: '9544243696'
    },
    {
        name: 'Naseeb P',
        imageName: 'naseeb.jpg',
        position: 'IT In-Charge',
        whatsapp: '8086891172'
    },
    {
        name: 'Anver Sadique',
        imageName: 'anwer.jpg',
        position: 'SQUIF Director',
        whatsapp: '9633078325'
    },
    {
        name: 'Fawaz MK',
        imageName: 'fawasMK.jpg',
        position: 'SQUIF Director',
        whatsapp: '9447146442'
    },
    {
        name: 'Hazeem',
        imageName: 'hazeem.jpg',
        position: '1st Year Rep.',
        whatsapp: '9567101448'
    },
    {
        name: 'Hisham',
        imageName: 'hisham.jpg',
        position: '2nd Year Rep.',
        whatsapp: '8156901568'
    },
    {
        name: 'Salahudheen',
        imageName: 'salahudheen.jpg',
        position: '3rd Year Rep.',
        whatsapp: '9746302994'
    },
    {
        name: 'Thanazzal',
        imageName: 'thanazzal.jpg',
        position: '4th Year Rep.',
        whatsapp: '9961278048'
    },
    {
        name: 'Shanib',
        imageName: 'shanib.jpg',
        position: 'PG Representative',
        whatsapp: '9946118673'
    },
    {
        name: 'Navas P',
        imageName: 'navas.jpeg',
        position: 'Treasurer',
        whatsapp: '9656060131'
    },
    {
        name: 'Munavar TP',
        imageName: 'munavar.jpg',
        position: 'Library Secretary',
        whatsapp: '702548464'
    },
    {
        name: 'Samjid Basheer',
        imageName: 'samjid.jpg',
        position: 'Maintanance Sec.',
        whatsapp: '9947571787'
    },
    {
        name: 'Favas P',
        imageName: 'favasP.jpg',
        position: 'Maintanance Sec.',
        whatsapp: '7025346520'
    },
    {
        name: 'Shabeel',
        imageName: 'shabeel.jpg',
        position: 'Blood Secretary',
        whatsapp: '8086617927'
    },
    {
        name: 'Adhil Ameen',
        imageName: 'adilAmeen.jpg',
        position: 'Program Secretary',
        whatsapp: '9383402858'
    }
]

let totalDetails = ''

committeDetails.forEach((item) => {
    totalDetails += itemGenerator(
        item.name,
        item.imageName,
        item.position,
        item.whatsapp
    )
})

committeeSection.innerHTML = totalDetails

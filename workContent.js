console.log('work javascript')

// let contactText = 'Well you are here, might as well connect!<br> My existence on the privatised internet:'
// let twitter = 'twitter => <a href="https://twitter.com/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
// let github = 'github => <a href="https://github.com/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
// let codementor = 'codementor => <a href="https://codementor.io/@techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
// let linkedin = 'linkedin => <a href="https://linkedin.com/in/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
// // add dev to links when i start publishing bytes / TIL code / content over at dev.to
// let devto = 'dev.to => <a href="https://linkedin.com/in/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
//
// let contactContent = `
// ${contactText} <br> <br>
// ${twitter} <br>
// ${github} <br>
// ${codementor} <br>
// ${linkedin} <br>
// `
// let contactElement = document.getElementById('main')
// let contactInner =  document.createElement('p')
// contactInner.innerHTML = contactContent
// contactElement.appendChild(contactInner)

let workGrid = ``
let works = [
    {title: `Portraits`, subtext: `Subtext for the work`, thumbnail: ``},
    {title: `Work 2`, subtext: `Subtext for the work`, thumbnail: ``},
    {title: `Work 3`, subtext: `Subtext for the work`, thumbnail: ``},
    {title: `Work 4`, subtext: `Subtext for the work`, thumbnail: ``},
    {title: `Work 5`, subtext: `Subtext for the work`, thumbnail: ``},
    {title: `Work 6`, subtext: `Subtext for the work`, thumbnail: ``},
    {title: `Work 7`, subtext: `Subtext for the work`, thumbnail: ``},
]

let workElement = document.getElementById('main')
let gridElement = createElement('', 'work-grid')

works.forEach((work) => {
    const card = createElement('', 'card')
    const cardMedia = createElement('', 'card-media')
    const cardText = createElement( '', 'card-text')

    const image = createElement('portraits_on_the_wall.png', 'card-image', 'img')
    image.style.width = '100%'
    image.style.height = '100%'
    image.style.objectFit = 'fill'
    const title = createElement('', 'card-text-title')
    title.innerHTML = work.title
    const subtext = createElement('', 'card-text-subtext')
    subtext.innerHTML = work.subtext

    cardMedia.appendChild(image)
    cardText.appendChild(title)
    cardText.appendChild(subtext)
    card.appendChild(cardMedia)
    card.appendChild(cardText)

    gridElement.appendChild(card)
})

workElement.appendChild(gridElement)

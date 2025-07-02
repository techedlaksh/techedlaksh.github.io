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
    {
        title: `JoyfulCards`,
        subtext: `Subtext for the work`,
        thumbnail: `joyfulcards1.gif`,
        size: 'ar-width',
        subpage: 'love',
    },
    {
        title: `Portraits`,
        subtext: `Subtext for the work`,
        thumbnail: `portraits_on_the_wall2.png`,
        size: 'ar-height',
        subpage: 'portraits',
    },
    {
        title: `Themes and Variations`,
        subtext: `Subtext for the work`,
        thumbnail: `themes_and_variations.png`,
        size: 'ar-square',
        subpage: 'themes_and_variations',
    },
    {
        title: `A Temporary arrangement of materials`,
        subtext: `Subtext for the work`,
        thumbnail: `spraypaper2.png`,
        size: 'ar-height',
        subpage: 'temporary_arrangement_of_materials',
    },
    {
        title: `Bertelsmann Investment`,
        subtext: `Subtext for the work`,
        thumbnail: `bertelsmann_investment_artwork3.gif`,
        size: 'ar-square',
        subpage: 'bertelsmann_investment_artwork',
    },
    {
        title: `Kanbas`,
        subtext: `Subtext for the work`,
        thumbnail: `kanbas_website.gif`,
        size: 'ar-square',
        subpage: 'kanbas',
    },
    {
        title: `In Conversation`,
        subtext: `Subtext for the work`,
        thumbnail: `in_conversation1.png`,
        size: 'ar-width',
        subpage: 'in_conversation',
    },
    {
        title: `Maegard`,
        subtext: `Subtext for the work`,
        thumbnail: `maegard1.png`,
        size: 'ar-square',
        subpage: 'maegard',
    },
    {
        title: `Martin Grasser v3`,
        subtext: `Subtext for the work`,
        thumbnail: `martin_grasser_portfolio1.gif`,
        size: 'ar-width',
        subpage: 'martin_grasser_portfolio',
    },
    {
        title: `Squares`,
        subtext: `Subtext for the work`,
        thumbnail: `squares1.png`,
        size: 'ar-square',
        subpage: 'squares',
    },
    {
        title: `Love`,
        subtext: `Subtext for the work`,
        thumbnail: `love1.gif`,
        size: 'ar-square',
        subpage: 'love',
    },
]

let workElement = document.getElementById('main')
let gridElement = createElement('', 'work-grid')

works.forEach((work) => {
    const card = createElement('', createClassString(['card', work.size]))
    const cardMedia = createElement('', 'card-media')
    const cardText = createElement( '', 'card-text')

    const image = createElement(`works/${work.thumbnail}`, createClassString(['card-img']), 'img')
    const title = createElement('', 'card-text-title')
    title.innerHTML = `${work.title},`
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

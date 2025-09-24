console.log('work javascript')

let workGrid = ``
let works = [
    {
        title: `JoyfulCards`,
        subtext: `Subtext for the work`,
        thumbnail: `joyfulcards1.mp4`,
        size: 'ar-width',
        subpage: 'joyfulcards',
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
        thumbnail: `spraypaper3.png`,
        size: 'ar-height',
        subpage: 'temporary_arrangement_of_materials',
    },
    {
        title: `Bertelsmann Investment`,
        subtext: `Subtext for the work`,
        thumbnail: `bertelsmann_investment_artwork3.gif`,
        size: 'ar-square',
        subpage: 'bertelsmann_investment',
    },
    {
        title: `Kanbas`,
        subtext: `Subtext for the work`,
        thumbnail: `kanbas_website.gif`,
        size: 'ar-square',
        subpage: 'kanbas',
    },
    // {
    //     title: `Maegard`,
    //     subtext: `Subtext for the work`,
    //     thumbnail: `maegard1.png`,
    //     size: 'ar-square',
    //     subpage: 'maegard',
    // },
    // {
    //     title: `Martin Grasser Portfolio`,
    //     subtext: `Subtext for the work`,
    //     thumbnail: `martin_grasser_portfolio1.gif`,
    //     size: 'ar-width',
    //     subpage: 'martin_grasser_portfolio',
    // },
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
    {
        title: `Experiments`,
        subtext: `Subtext for the work`,
        thumbnail: `experiments.png`,
        size: 'ar-width',
        subpage: 'experiments',
    },
]

let workElement = document.getElementById('main')
let gridElement = createElement('', 'work-grid')

works.forEach((work) => {
    const card = createElement('', createClassString(['card', work.size]))
    const cardMedia = createElement('', 'card-media')
    const cardText = createElement( '', 'card-text')

    const previewPath = `works/${work.thumbnail}`
    let preview
    if (work.thumbnail.split('.').at(-1) == 'mp4') {
        preview = createElement(previewPath, 'card-img', 'video')
    } else {
        preview = createElement(previewPath, 'card-img', 'img')
    }

    // const image = createElement(previewPath, createClassString(['card-img']), 'img')
    const title = createElement('', 'card-text-title')
    title.innerHTML = `${work.title},`
    const subtext = createElement('', 'card-text-subtext')
    subtext.innerHTML = work.subtext

    cardMedia.appendChild(preview)
    cardText.appendChild(title)
    cardText.appendChild(subtext)
    card.appendChild(cardMedia)
    card.appendChild(cardText)
    card.setAttribute('onclick', `location.href='./works/${work.subpage}.html'`)

    gridElement.appendChild(card)
})

workElement.appendChild(gridElement)

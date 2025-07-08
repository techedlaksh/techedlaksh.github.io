console.log('joyfulcards javascript')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('JoyfulCards,','work-page-title','h1')
let subtext = createElement('Save the Date cards made in minutes','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', ['Self'])
)
attributesContainer.appendChild(
    addAttribute('Year', ['2024'])
)
attributesContainer.appendChild(
    addAttribute('Role', 'UI/UX, Full Stack Development, Asset Design')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'SolidJS, Tailwind, AI')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'joyfulcard_scrolling.gif' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'joyfulcard_bg1.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'joyfulcard_bg2.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'joyfulcard_headline.png' ,
        size: {w: '70%', h: 'auto',}
    },
    { 
        thumbnail: 'joyfulcard_bg3.png' ,
        size: {w: '30%', h: 'auto',}
    },
    { 
        thumbnail: 'joyfulcard_bg4.png' ,
        size: {w: '30%', h: 'auto',}
    },
    { 
        thumbnail: 'joyfulcard_steps.png' ,
        size: {w: '70%', h: 'auto',}
    },
]

mediaItems.forEach((item) => {
    const moduleMedia = createElement('', createClassString(['module-media']))
    // const moduleCardMedia = createElement('', 'module-media-media')
    moduleMedia.style.width = item.size.w
    moduleMedia.style.height = item.size.h
    // moduleMedia.style.paddingLeft = '1em'
    moduleMedia.style.paddingRight = '1em'

    const media = createElement(`works/joyfulcards/${item.thumbnail}`, '', 'img')
    media.style.width = '100%'
    media.style.height = 'auto'

    moduleMedia.appendChild(media)
    // moduleMedia.appendChild(moduleCardMedia)


    mediaGrid.appendChild(moduleMedia)
})

moduleContent.appendChild(mediaGrid)


heading.appendChild(title)
heading.appendChild(subtext)
modulePage.appendChild(heading)
modulePage.appendChild(attributesContainer)
modulePage.appendChild(moduleContent)
mainElement.appendChild(modulePage)

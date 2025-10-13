console.log('portraits javascript')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    console.log(items)
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('Portraits,','module-page-title','h1')
let subtext = createElement('Visual Language represented in Mirrors','module-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'TRAME')
)
attributesContainer.appendChild(
    addAttribute('Year', '2023, 2024')
)
attributesContainer.appendChild(
    addAttribute('Role', 'UI/UX, Full Stack Development, Generative Algorithm')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'SolidJS, Tailwind, Vite, SQlite, Elysia, Bun, Docker')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'portraits_product.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_mirror2.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_mirror3.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_about.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_homepage.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_mirror4.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_mirror5.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'portraits_mirror8.png' ,
        size: {w: '50%', h: 'auto',}
    },
]

mediaItems.forEach((item) => {
    const moduleMedia = createElement('', createClassString(['module-media']))
    // const moduleCardMedia = createElement('', 'module-media-media')
    moduleMedia.style.width = item.size.w
    moduleMedia.style.height = item.size.h

    const itemPath = `works/portraits/${item.thumbnail}`
    let media
    if (item.thumbnail.split('.').at(-1) == 'mp4') {
        media = createElement(itemPath, '', 'video')
    } else {
        media = createElement(itemPath, '', 'img')
    }
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

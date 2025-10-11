console.log('prototypes')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('Prototypes','work-page-title','h1')
let subtext = createElement('Fun, Small, Brainstorming ideas','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'Me')
)
attributesContainer.appendChild(
    addAttribute('Year', '2008 - 2025')
)
attributesContainer.appendChild(
    addAttribute('Role', 'Full Stack Developer')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'HTML, CSS, JS, Python, NodeJS')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'in_conversation1.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'in_conversation2.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'in_conversation5.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'in_conversation4.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'maegard1.png' ,
        size: {w: '100%', h: 'auto',}
    },
]

function addMedia(fname) {
    const assetsPath = `works/prototypes`
    const itemPath = `${assetsPath}/${fname}`
    let media
    if (['mp4', 'mov'].includes(fname.split('.').at(-1))) {
        media = createElement(itemPath, '', 'video')
    } else {
        media = createElement(itemPath, '', 'img')
    }
    return media
}

mediaItems.forEach((item) => {
    const moduleMedia = createElement('', createClassString(['module-media']))
    moduleMedia.style.width = item.size.w
    moduleMedia.style.height = item.size.h

    if (Array.isArray(item.thumbnail)) {
        item.thumbnail.forEach((subItem) => {
            const itemName = subItem
            const media = addMedia(itemName)
            media.style.width = item.size.divide
            media.style.height = 'auto'
            media.style.paddingBottom = '.5em'
            media.style.paddingRight = '.5em'
            moduleMedia.appendChild(media)
        })
    } else {
        const itemName = item.thumbnail
        const media = addMedia(itemName)
        media.style.width = '100%'
        media.style.height = 'auto'
        moduleMedia.appendChild(media)
    }


    mediaGrid.appendChild(moduleMedia)
})

moduleContent.appendChild(mediaGrid)


heading.appendChild(title)
heading.appendChild(subtext)
modulePage.appendChild(heading)
modulePage.appendChild(attributesContainer)
modulePage.appendChild(moduleContent)
mainElement.appendChild(modulePage)

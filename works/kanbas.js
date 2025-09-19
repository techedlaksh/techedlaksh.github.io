console.log('kanbas')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('Kanbas','work-page-title','h1')
let subtext = createElement('Framer Website','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'Kanbas')
)
attributesContainer.appendChild(
    addAttribute('Year', '2025')
)
attributesContainer.appendChild(
    addAttribute('Role', 'Framer, Front End Development ')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'ReactJS, HTML, JS, CSS, Python, Excel Automation')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'kanbas_home_hero.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'kanbas_film_page.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'kanbas_recent_hover.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'kanbas_core_hover.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'kanbas_artists_hover.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
]

function addMedia(fname) {
    const assetsPath = `works/kanbas`
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

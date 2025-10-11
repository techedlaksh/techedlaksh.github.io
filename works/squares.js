console.log('squares')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('Squares','work-page-title','h1')
let subtext = createElement('Digital Abstract Art','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'Martin Grasser')
)
attributesContainer.appendChild(
    addAttribute('Year', '2021-2022')
)
attributesContainer.appendChild(
    addAttribute('Role', 'Generative Algorithms, Internal Tools')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'HTML, CSS, JS, Python')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'squares_ab_hero.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'squares_ab_grid.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'squares_showcase.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: [
            'squares_layers1.png',
            'squares_full1.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: [
            'squares_layers2.png',
            'squares_full2.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: [
            'squares_layers3.png',
            'squares_full3.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: [
            'squares_layers4.png',
            'squares_full4.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: [
            'squares_layers5.png',
            'squares_full5.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: 'squares_exp3.png' ,
        size: {w: '70%', h: 'auto',}
    },
    { 
        thumbnail: [
            'squares_exp1.png',
            'squares_exp2.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: [
            'squares_slides2-1.png',
            'squares_slides2-5.png',
            'squares_slides2-2.png',
            'squares_slides2-3.png',
            'squares_slides2-4.png',
        ],
        size: {w: '100%', h: 'auto', divide:'100%'}
    },
]

function addMedia(fname) {
    const assetsPath = `works/squares`
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

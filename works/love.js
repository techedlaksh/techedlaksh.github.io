console.log('love')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('Love','work-page-title','h1')
let subtext = createElement('Simply - ATP Tennis, Data and Art','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'ATP')
)
attributesContainer.appendChild(
    addAttribute('Year', '2022')
)
attributesContainer.appendChild(
    addAttribute('Role', 'Generative Algorithms, Internal Tools, Front End Development')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'HTML, JS, CSS, Python')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'love_showcase.mp4' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'love_intro2.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: [
            'love_marketing1.mp4',
            'love_marketing2.mp4',
            'love_marketing3.mp4',
        ],
        size: {w: '100%', h: 'auto', divide: '33%'}
    },
    { 
        thumbnail: 'love_tournament.jpg' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_point1.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_point2.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_collection_step1.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_collection_step2.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_collection_step3.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_collection_step4.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_collection_step5.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: [
            'love_collection_step6.png',
            'love_collection_step7.png',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: [
            'love_court_dims_real.png',
            'love_court_dims_sim.svg',
        ],
        size: {w: '100%', h: 'auto', divide: '50%'}
    },
    { 
        thumbnail: 'love_internal_tool1.mp4' ,
        size: {w: '80%', h: 'auto',}
    },
    { 
        thumbnail: 'love_palettes_wip.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_shadow_helper.mp4' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'love_shadow_set.png' ,
        size: {w: '97.5%', h: 'auto',}
    },
]

function addMedia(fname) {
    const assetsPath = `works/love`
    const itemPath = `${assetsPath}/${fname}`
    let media
    if (['mp4', 'mov'].includes(fname.split('.').at(-1))) {
        media = createElement(itemPath, '', 'video')
    } else if (['svg'].includes(fname.split('.').at(-1))) {
        media = createElement(itemPath, '', 'svg')
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

console.log('a temporary arrangement of materials')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('A temporary arrangement of materials,','work-page-title','h1')
let subtext = createElement('Compositing shapes with new perspective','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'Bright Moments, Martin Grasser')
)
attributesContainer.appendChild(
    addAttribute('Year', '2024')
)
attributesContainer.appendChild(
    addAttribute('Role', 'Front End Development, Shaders, Internal Tools, Generative Algorithms')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'HTML, JS, CSS, GLSL, Python')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'tam_about.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'tam_showcase.mp4' ,
        size: {w: '28%', h: 'auto',}
    },
    { 
        thumbnail: [
            'tam_mint7.png',
            'tam_mint1.png',
            'tam_mint2.png',
            'tam_mint4.png',
            'tam_mint8.png',
            'tam_paint1.png',
            'tam_paint2.png',
            'tam_paint3.png',
            'tam_paint6.png',
            'tam_paint8.png',
        ] ,
        size: {w: '70%', h: 'auto', divide: '20%'}
    },
    { 
        thumbnail: [
            'tam_live_paint1.png',
            'tam_live_paint2.png',
        ] ,
        size: {w: '75%', h: 'auto', divide: '43%'}
    },
    { 
        thumbnail: 'tam_live_paint.mp4',
        size: {w: '25%', h: 'auto',}
    },
    { 
        thumbnail: 'tam_editor.mp4',
        size: {w: '65%', h: 'auto',}
    },
    { 
        thumbnail: 'tam_mask_noise.mp4',
        size: {w: '45%', h: 'auto',}
    },
    { 
        thumbnail: [
            'spray_noise1.png',
            'spray_noise2.png',
            'spray_noise3.png',
            'spray_noise4.png',
            'spray_noise5.png',
            'spray_noise6.png',
        ] ,
        size: {w: '55%', h: 'auto', divide: '33%'}
    },
]

function addMedia(fname) {
    const itemPath = `works/temporary_arrangement_of_materials/${fname}`
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
    moduleMedia.style.paddingRight = '1em'

    if (Array.isArray(item.thumbnail)) {
        item.thumbnail.forEach((subItem) => {
            const itemName = subItem
            const media = addMedia(itemName)
            media.style.width = item.size.divide
            media.style.height = 'auto'
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

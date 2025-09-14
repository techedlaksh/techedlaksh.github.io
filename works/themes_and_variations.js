console.log('themes and variations javascript')

let mainElement = document.getElementById('main')
let modulePage = createElement('','module-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','module-page-heading')
let title = createElement('Themes and Variations,','work-page-title','h1')
let subtext = createElement('Reimagines Typography with Algorithms','work-page-subtext','h1')

let attributesContainer = createElement('','attributes')
attributesContainer.appendChild(
    addAttribute('Client', 'Sotheby\'s, Vera Molnar')
)
attributesContainer.appendChild(
    addAttribute('Year', '2023')
)
attributesContainer.appendChild(
    addAttribute('Role', 'UI/UX, Front End Development, Internal Tools, Generative Algorithms')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'HTML, JS, CSS')
)

let moduleContent = createElement('', 'module-page-content')
let mediaGrid = createElement('', 'media-grid')
mediaItems = [
    { 
        thumbnail: 'themes_N_letter.mp4' ,
        size: {w: '33%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_F_letter.mp4' ,
        size: {w: '33%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_T_letter.mp4' ,
        size: {w: '33%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_pattern_explorer.mp4' ,
        size: {w: '61%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_showcase.mp4' ,
        size: {w: '39%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_about.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_product.mp4' ,
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

    const itemPath = `works/themes_and_variations/${item.thumbnail}`
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

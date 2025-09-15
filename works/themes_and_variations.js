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
        thumbnail: 'artblocks_hero.png' ,
        size: {w: '100%', h: 'auto',}
    },
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
        thumbnail: 'themes_about.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_pattern_builder.mp4' ,
        size: {w: '67%', h: 'auto',}
    },
    { 
        thumbnail: [
            'themes_pattern1.png', 
            'themes_pattern2.png', 
            'themes_pattern3.png',
            'themes_pattern4.png',
            'themes_pattern5.png',
            'themes_pattern6.png',
        ],
        size: {w: '33%', h: 'auto',}
    },
    // { 
    //     thumbnail: 'themes_pattern_explorer.mp4' ,
    //     size: {w: '30%', h: 'auto',}
    // },
    { 
        thumbnail: 'themes_grid_maker.mp4' ,
        size: {w: '40%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_grid_explore.mov' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_grid_visual.png' ,
        size: {w: '50%', h: 'auto',}
    },
    { 
        thumbnail: 'themes_showcase.mp4' ,
        size: {w: '39%', h: 'auto',}
    },
    { 
        thumbnail: 'book_specialthanks.png' ,
        size: {w: '100%', h: 'auto',}
    },
    { 
        thumbnail: 'book_hardcover.png' ,
        size: {w: '42%', h: 'auto',}
    },
    { 
        thumbnail: 'book_entry.png' ,
        size: {w: '58%', h: 'auto',}
    },
]

function addMedia(fname) {
    const itemPath = `works/themes_and_variations/${fname}`
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
            media.style.width = '50%'
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

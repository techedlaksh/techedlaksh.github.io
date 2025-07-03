
console.log('joyfulcards javascript')
let mainElement = document.getElementById('main')
let workPage = createElement('','work-page')

function addAttribute(category='Category', items='Item 1, Item 2') {
    const el = createElement('','attribute')
    el.appendChild(createElement(category, 'attr-category', 'h5'))
    el.appendChild(createElement(items, 'attr-items', 'h3'))
    return el
}

let heading = createElement('','work-page-heading')
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
    addAttribute('Role', 'UI/UX, Full Stack Development')
)
attributesContainer.appendChild(
    addAttribute('Tools', 'SolidJS, Tailwind')
)



heading.appendChild(title)
heading.appendChild(subtext)
workPage.appendChild(heading)
workPage.appendChild(attributesContainer)
mainElement.appendChild(workPage)

let footerText = 'Handcrafted with good old HTML, CSS, Javascript. | Last Updated: December 2025'

let footerContent = `
${footerText}
`
let footerElement = document.getElementById('footer')
let footerInner =  document.createElement('div')
footerInner.innerHTML = footerContent
footerElement.appendChild(footerInner)


let byteList = []

function createLink(link) {
    return link && 'bytes/' + link + '.html'
}

function addByte(title='', link='') {
    let article = ''
    let verticalGap = title && '<br><br>'
    let linkUpdated = createLink(link)
    article += `<a href=${linkUpdated}> ${title} </a>`
    article += verticalGap
    console.log('Article added: ', title, link)
    return article
}

//byteList.push(addByte(
//   'Byte Starter', 
//   'byte_starter'
//))

byteList.push(addByte(
    'Oh My Terminal: Config files and more', 
    'oh_my_terminal'
))

//byteList.push(addByte(
//    'Vera Molnar and my time on her last project',
//    'working_with_vera'
//))
//
//byteList.push(addByte(
//    'Coding outside the box: Working with this Artist changed my coding',
//    'working_with_artist'
//))
/*
    * Project list with Martin Grasser
    * Squares July 22
    * Love November 22
    * Vera July 23
    * Portraits December 23
    * Bright Moments February 24
    * Jeff Davis May 24
    * Mirrors August 24
*/

let byteContent = `
${byteList.reverse().join('')}
`

let byteContainer = document.getElementById('main')
let byteElement =  document.createElement('div')
byteElement.innerHTML = byteContent
byteContainer.appendChild(byteElement)


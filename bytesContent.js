let byteText = ''

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

byteText += addByte(
  'Byte Starter', 
  'byte_starter'
)

byteText += addByte(
  'Oh My Terminal: A ZSH Story', 
  'oh_my_terminal'
)

byteText += addByte()

let byteContent = `
${byteText}
`
let byteElement = document.getElementById('main')
let byteInner =  document.createElement('div')
byteInner.innerHTML = byteContent
byteElement.appendChild(byteInner)


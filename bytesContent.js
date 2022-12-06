let byteText = '<a href=""> More than One Invisible Unicode Characters</a>'

let byteContent = `
${byteText}
`
let byteElement = document.getElementById('main')
let byteInner =  document.createElement('div')
byteInner.innerHTML = byteContent
byteElement.appendChild(byteInner)


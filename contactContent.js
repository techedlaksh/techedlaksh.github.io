console.log('contact javascript')
let contactText = 'Well you are here, might as well connect!<br> My existence on the privatised internet:'
let twitter = 'twitter => <a href="https://twitter.com/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
let github = 'github => <a href="https://github.com/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
let codementor = 'codementor => <a href="https://codementor.io/@techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'
let linkedin = 'linkedin => <a href="https://linkedin.com/in/techedlaksh" target="_blank" rel="noopener noreferrer"> [ techedlaksh ]</a>'

let contactContent = `
${contactText} <br> <br>
${twitter} <br>
${github} <br>
${codementor} <br>
${linkedin} <br>
`
let contactElement = document.getElementById('main')
let contactInner =  document.createElement('p')
contactInner.innerHTML = contactContent
contactElement.appendChild(contactInner)


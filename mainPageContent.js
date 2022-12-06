let latest = '\
<a href="https://art.tennis/project/0" target="_blank" rel="noopener noreferrer"> [ Love: Tennis ] </a>\
NFT Collection with \
<a href="https://martingrasser.com/" target="_blank" rel="noopener noreferrer"> < martin grasser > </a>\
<a href="https://www.artblocks.io/" target="_blank" rel="noopener noreferrer"> < artblocks.io > </a>\
<a href="https://www.nittoatpfinals.com/" target="_blank" rel="noopener noreferrer"> < ATP > </a>\
'
let latestPS = '\
you can checkout the whole collection at \
<a href="https://opensea.io/collection/love-tennis-art-collection" target="_blank" rel="noopener noreferrer"> < OpenSea > </a>\
'
// latest = ''
let [p1, p2, p3, p4] = ['', '', '', '']

p1 = 'I write code for my own entertainment and the love I have for it. Professionally, I am a Software Engineer,\
    <a href="https://codementor.io/@techedlaksh" target="_blank" rel="noopener noreferrer"> mentor </a> and personally,\
    an <a href = "https://en.wikipedia.org/wiki/Existentialism" target="_blank" rel="noopener noreferrer"> existensial thinker.</a>'

p2 = ' Currently I am working with \
<a href="https://martingrasser.com" target="_blank" rel="noopener noreferrer"> Martin Grasser </a> at his \
<a href="https://andrepeat.com" target="_blank" rel="noopener noreferrer"> And Repeat Studio </a> as a Creative Developer, creating \
<a href="https://www.artblocks.io/user/0x616fc752e4d9503b1b65b51f1113003ab2256ce9" target="_blank" rel="noopener noreferrer"> Generative Art </a> and bringing art projects to digital world and a screen near you. Over the years, my work has stretched across art with code, playing with data and teaching machine the meaning of real world data. In my career I have had many different roles such as data scientist, data engineering, full stack engineering and ofcourse an unpaid intern and each position was intriguing as the other.'

p3 = 'In today\'s time, I am exploring 3D space and it\'s relation with our daily viewing uninteresting 2D flat screens, learning maths, physics (all that fun stuff) and subjectivity of the art world & it\'s art, tinkering around Game Mechanics. Oh also some amazing Space stuff (Earth is really a pea in ocean).'

p4 = 'I get excited about disruptive things for instance \
<a href="https://artblocks.io" target="_blank" rel="noopener noreferrer"> Generative Art is making waves in the form of NFT</a> or \
<a href="https://hn.algolia.com/?q=rust" target="_blank" rel="noopener noreferrer"> Everything Rust, Everywhere All At Once </a> and anything that is a foundation such as \
<a href="https://en.wikipedia.org/wiki/Vim_(text_editor)" target="_blank" rel="noopener noreferrer"> Screen-based Text Editors (vi[m]) </a> or \
<a href="https://en.wikipedia.org/wiki/History_of_artificial_neural_networks" target="_blank" rel="noopener noreferrer"> Neural Network actually first came around 1943 and not a 21st Century mircale</a>. Also I really love travelling.'

'Over the years, my work has stretched across art with code, playing with data and teaching machine the meaning of real world data. Currently I am working with Martin Grasser at his And Repeat Studio as a Creative Developer (there needs to be more creative work in tech), creating Generative Art and bringing art projects to life.'

'My love for code - Blog'
'My Digital Timeline - long bio content - thevalueable.dev "inspired" Career Timeline'


'My work over the years have been stretched over at horziontal level then at vertical due to my obsessions of tinkering with new playgrounds overcoming my own current desire to specialise and settle, If this would have been a movie scene, my line would probably be "I am still young and hungry"'

'I am currently working with Martin Grasser at And Repeat Studio. In the past I have shared my titles from data scientist, data engineering, full stack engineer and ofcourse an unpaid intern'

let content = `
${p1} <br> <br>
${p2} <br> <br>
${p3} <br> <br>
${p4} <br> <br>
`
let main = document.getElementById('main')
let contentPara =  document.createElement('p')
if (latest != '') {
    console.log('latest')
    let latestPara =  document.createElement('div')
    latestPara.setAttribute("class", "latest")
    latestPara.innerHTML += 'Latest: '
    latestPara.innerHTML += latest
    let latestPSElement =  document.createElement('div')
    latestPSElement.setAttribute("class", "latestPS")
    latestPSElement.innerHTML += latestPS
    latestPara.appendChild(latestPSElement)
    contentPara.appendChild(latestPara)
}
contentPara.innerHTML += content
main.appendChild(contentPara)


//let latest = '\
//<a href="https://art.tennis/project/0" target="_blank" rel="noopener noreferrer"> [ Love: Tennis ] </a>\
//NFT Collection with \
//<a href="https://martingrasser.com/" target="_blank" rel="noopener noreferrer"> < martin grasser > </a>\
//<a href="https://www.artblocks.io/" target="_blank" rel="noopener noreferrer"> < artblocks.io > </a>\
//<a href="https://www.nittoatpfinals.com/" target="_blank" rel="noopener noreferrer"> < ATP > </a>\
//'
let greeting = '\
Hey &#x1F44B; I\'m Laksh \
'

let latest = '\
I am the maker, founder and proud owner of \
<a href="https://joyfulcards.me" target="_blank" rel="noopener noreferrer"> [ JoyfulCards ] </a>\
'

let latestPS = '\
you can checkout my journey in this \
<a href="bytes/canvas_text.html" target="" rel="noopener noreferrer"> < Blog > </a>\
'
// latest = ''
let [p1, p2, p3, p4] = ['', '', '', '']

p1 = 'I write code for my own entertainment and the love I have for it. Professionally, I am a Software Engineer,\
    and in my free time, I like to <a href="https://codementor.io/@techedlaksh" target="_blank" rel="noopener noreferrer"> mentor, </a>\
    give talks, swim and play video games.\
    '

p2 = '\
Currently I am working with \
<a href="https://martingrasser.com" target="_blank" rel="noopener noreferrer"> Martin Grasser </a> at his \
<a href="https://andrepeat.com" target="_blank" rel="noopener noreferrer"> And Repeat Studio </a> as a Creative Developer, \
working on some interesting projects.'

'<a href="https://www.artblocks.io/user/0x616fc752e4d9503b1b65b51f1113003ab2256ce9" target="_blank" rel="noopener noreferrer"> Generative Art </a>\
and bringing art projects to digital world and a screen near you.'

p3 = '\
Over the years, my work has stretched across very fun and unique domains: <br>\
- making that beautiful products from front to backend <br>\
- mashing code to create art <br>\
- teaching machine the meaning of real world data <br>\
<br>\
In my career I have had many different roles including full stack engineer, data scientist, assistant teacher \
and ofcourse an unpaid intern, each position was intriguing as the other.'

p4 = 'P.S. I really love travelling.'

'In today\'s time, I am exploring 3D space and it\'s relation with our daily viewing uninteresting 2D flat screens, learning maths, physics (all that fun stuff) and subjectivity of the art world & it\'s art, looking at Game Mechanics through microscope. Oh also some amazing Space stuff (Earth is really a pea in ocean).'

'I get excited about disruptive things for instance \
<a href="https://artblocks.io" target="_blank" rel="noopener noreferrer"> Generative Art is making waves in the form of NFT</a> or \
<a href="https://hn.algolia.com/?q=rust" target="_blank" rel="noopener noreferrer"> Everything Rust, Everywhere All At Once </a> and anything that is a foundation such as \
<a href="https://en.wikipedia.org/wiki/Vim_(text_editor)" target="_blank" rel="noopener noreferrer"> Screen-based Text Editors (vi[m]) </a> or \
<a href="https://en.wikipedia.org/wiki/History_of_artificial_neural_networks" target="_blank" rel="noopener noreferrer"> Neural Network actually first came around 1943 and not a 21st Century miracle</a>. '


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
if (greeting != '') {
    let greetingElement =  document.createElement('div')
    greetingElement.setAttribute("class", "greeting")
    greetingElement.innerHTML += greeting
    contentPara.appendChild(greetingElement)
}
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


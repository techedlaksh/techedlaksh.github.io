let title = ''
let meta = ''

title = 'oh my Terminal: A ZSH Story'
title = 'Oh My Setup: before writing my first letter of code in MacOS'
meta = 'by techedlaksh | March 2023'

let [p1, p2, p3, p4] = ['', '', '', '']

p1 = 'I write code for my own entertainment and the love I have for it. Professionally, I am a Software Engineer,\
    <a href="https://codementor.io/@techedlaksh" target="_blank" rel="noopener noreferrer"> mentor </a> and personally,\
    an <a href = "https://en.wikipedia.org/wiki/Existentialism" target="_blank" rel="noopener noreferrer"> existensial thinker.</a>'

p2 = 'Currently I am working with \
<a href="https://martingrasser.com" target="_blank" rel="noopener noreferrer"> Martin Grasser </a> at his \
<a href="https://andrepeat.com" target="_blank" rel="noopener noreferrer"> And Repeat Studio </a> as a Creative Developer, creating \
<a href="https://www.artblocks.io/user/0x616fc752e4d9503b1b65b51f1113003ab2256ce9" target="_blank" rel="noopener noreferrer"> Generative Art </a> and bringing art projects to digital world and a screen near you. Over the years, my work has stretched across art with code, playing with data and teaching machine the meaning of real world data. In my career I have had many different roles such as data scientist, data engineering, full stack engineering and ofcourse an unpaid intern and each position was intriguing as the other.'

p3 = 'In today\'s time, I am exploring 3D space and it\'s relation with our daily viewing uninteresting 2D flat screens, learning maths, physics (all that fun stuff) and subjectivity of the art world & it\'s art, looking at Game Mechanics through microscope. Oh also some amazing Space stuff (Earth is really a pea in ocean).'

p4 = 'I get excited about disruptive things for instance \
<a href="https://artblocks.io" target="_blank" rel="noopener noreferrer"> Generative Art is making waves in the form of NFT</a> or \
<a href="https://hn.algolia.com/?q=rust" target="_blank" rel="noopener noreferrer"> Everything Rust, Everywhere All At Once </a> and anything that is a foundation such as \
<a href="https://en.wikipedia.org/wiki/Vim_(text_editor)" target="_blank" rel="noopener noreferrer"> Screen-based Text Editors (vi[m]) </a> or \
<a href="https://en.wikipedia.org/wiki/History_of_artificial_neural_networks" target="_blank" rel="noopener noreferrer"> Neural Network actually first came around 1943 and not a 21st Century miracle</a>. Also I really love travelling.'

'Over the years, my work has stretched across art with code, playing with data and teaching machine the meaning of real world data. Currently I am working with Martin Grasser at his And Repeat Studio as a Creative Developer (there needs to be more creative work in tech), creating Generative Art and bringing art projects to life.'

'My love for code - Blog'
'My Digital Timeline - long bio content - thevalueable.dev "inspired" Career Timeline'


'My work over the years have been stretched over at horziontal level then at vertical due to my obsessions of tinkering with new playgrounds overcoming my own current desire to specialise and settle, If this would have been a movie scene, my line would probably be "I am still young and hungry"'

'I am currently working with Martin Grasser at And Repeat Studio. In the past I have shared my titles from data scientist, data engineering, full stack engineer and ofcourse an unpaid intern'

p1 = '\
    First and foremost, this particular byte reflect my own setup and is written specifically for future me. If you are reading this then probably some "sentient" search engine has deemed this byte useful. Happy Reading.\
'

p2 = '\
    Ever since I first ran the command `htop` on my Ubuntu 13.10 back in 2014, I have been hooked on Terminals and their flexibility to run almost everything and as a professional nerd, I try to keep my terminal setup custom to my needs.\
'

function createLink(content='', link='', lineBreak=false) {
    return `<a href=" ${link} " target="_blank" rel="noopener noreferrer"> ${content}</a>${lineBreak? "<br>": ""}`
}
p3 = `\
    List of Installations:<br>\
    - ${createLink('Karabiner-Elements', 'https://karabiner-elements.pqrs.org/', true)}\
    - ${createLink('Raycast', 'https://www.raycast.com/', true)}\
    - ${createLink('Alacritty', 'https://github.com/alacritty/alacritty', true)}\
    - ${createLink('Zsh', 'https://www.zsh.org/', true)}\
    - ${createLink('Oh My Zsh', 'https://ohmyz.sh/', true)}\
    - ${createLink('tmux', 'https://github.com/tmux/tmux/wiki', true)}\
`

p4 = `\
    I am gonna keep this short and concise. Raycast is a a great, extensible Open Source launcher and an alternative to the default Spotlight in MacOS. I have been using raycast for my daily task of spotlight as well as it's community based extensions such as ${createLink('Rectangle', '')} window management,
    custom scripts for launching Alacritty with the respective config, different hotkeys, aliases and many other rich features.
    As for my terminal, built upon on Rust, one and only "Alacritty". It lacks the traditional UI Preferences but allows for an extensive configuration through config files. My Alacritty can be found on my ${createLink('dotfiles', '')} github repo.
`

let content = `
${p1} <br> <br>
${p2} <br> <br>
${p3} <br> <br>
${p4} <br> <br>
`
let main = document.getElementById('main')
let contentPara =  document.createElement('p')

function createClassString(classes) {
    return classes.join(' ')
}

function createElement(content, classString) {
    let el =  document.createElement('div')
    el.setAttribute("class", classString)
    el.innerHTML += content
    return el
}

let titleElement = createElement(
    title,
    createClassString(
        [
            'latest',
            'title'
        ]
    )
)

let metaElement = createElement(
    meta,
    createClassString(
        [
            'latestPS',
            'meta'
        ]
    )
)

titleElement.appendChild(metaElement)
contentPara.appendChild(titleElement)

contentPara.innerHTML += content
main.appendChild(contentPara)



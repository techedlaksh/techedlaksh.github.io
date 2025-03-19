let orderedListConfig = {}

let title = ``
let subtext = ``
let meta = ``
let mentions = ``

title = `Have you got time to play with Canvas Text?`
subtext = `It's not much but it's an honest work`
subtext = `a small playground for canvas text properties`
meta = 'by techedlaksh | April 2023'

let [p1, p2, p3, p4, p5] = ['', '', '', '', '']

p1 = `
    Okay, let's see what I am writing about today. Oh yes, Canvas, the backbone of drawing graphics via javascript on browsers for the internet.
    Well more specifically I am writing about drawing text onto the canvas.
`

p2 = `
    Recently I was rehashing my Canvas API knowledge as every developer does whenever new requirements comes for the project and I had some
    use case for text and svg, so I thought to myself why not create a playground for drawing text in canvas wasting more hours on something 
    nobody asked for.
`
p3 = `
    Anyway, here I am now, writing about it. Canvas API text playground is ${createLink('live', 'http://lak.sh/canvas-text/')}${makeSup(orderedList('byteMentions'))}${makeSup(orderedList('byteMentions'))}
    and the ${createLink('code', 'https://github.com/techedlaksh/canvas-text')} on github for it too.
    I will link the SVG playground here once I decide again to not work on my actual "Work".
`
p4 = `
    Drawing text on canvas is a little different than writing text onto HTML but the properties to manipulate the text uses the same
    pattern as CSS such as font styles or color.
    ${addImage('output.gif')}
`
    // ${addImage('canvas_text_playground.gif')}

p5 = `${addIframe('https://lak.sh/canvas-text')}`

let content = `
${p1} <br> <br>
${p2} <br> <br>
${p3} <br> <br>
${p4} <br> <br>
${p5} <br> <br>
`
let main = document.getElementById('main')
let contentPara =  document.createElement('p')

function addIframe(url) {
    return `<iframe src="${url}" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:100%;border:none;overflow:hidden;"></iframe>`
}

function createClassString(classes) {
    return classes.join(' ')
}

function createElement(content, classString, tag='div') {
    let el =  document.createElement(tag)
    classString && el.setAttribute("class", classString)
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

let subtextElement = createElement(
    subtext,
    createClassString(
        [
            'latestPS',
            'subtext'
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

mentions = `
    ${orderedList('mentions')}.  Disclaimer: This playground was made for fun and doesn't display my peak code writing skills, i forgot to copy code from stackoverflow and straight went to mdn.  ${orderedList('mentions', false)} ${addBreak(2)}
    ${orderedList('mentions')}.  The base css used in the playground is by one of my friends, Arsh. Check out his blog on ${createLink('glitchcomet', 'https://glitchcomet.com/articles/')}.  ${orderedList('mentions', false)} ${addBreak(1)}
`

// mentions = `
//     ${orderedList('mentions')}.  I like to fiddle around and do dumb shit. Use this ${createLink('zsh prompt expansion manual', 'https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion')} and you can go really crazy on your terminal prompt. ${orderedList('mentions', false)} <br>
//     ${orderedList('mentions')}.  Check ${createLink('this', 'https://arslan.io/2018/02/05/gpu-accelerated-terminal-alacritty/')} and ${createLink('this', 'https://arvdl.github.io/posts/zsh-tmux-alacrity/')} article out for some indepth guide on terminal setup. ${orderedList('mentions', false)} <br>
// `

titleElement.appendChild(subtextElement)
titleElement.appendChild(metaElement)
contentPara.appendChild(titleElement)

contentPara.innerHTML += content
main.appendChild(contentPara)

let lineBreak = document.createElement('hr')
lineBreak.style.width = "100%"

let mentionElement = document.createElement('p')
mentionElement.style.width = "100%"
mentionElement.innerHTML += mentions

main.appendChild(lineBreak)
main.appendChild(mentionElement)

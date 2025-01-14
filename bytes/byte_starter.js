let orderedListConfig = {}
let title = ''
let meta = ''
let subtext = ''
let [p1, p2, p3, p4, p5] = ['', '', '', '']

let content = `
${p1} <br> <br>
${p2} <br> <br>
${p3} <br> <br>
${p4} <br> <br>
${p5} <br> <br>
`
let main = document.getElementById('main')
let contentPara =  document.createElement('p')

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

let mentions = `
    ${orderedList('mentions')}.  I like to fiddle around and do dumb shit. Use this ${createLink('zsh prompt expansion manual', 'https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion')} and you can go really crazy on your terminal prompt. ${orderedList('mentions', false)} <br>
    ${orderedList('mentions')}.  Check ${createLink('this', 'https://arslan.io/2018/02/05/gpu-accelerated-terminal-alacritty/')} and ${createLink('this', 'https://arvdl.github.io/posts/zsh-tmux-alacrity/')} article out for some indepth guide on terminal setup. ${orderedList('mentions', false)} <br>
`

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

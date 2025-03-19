let orderedListConfig = {}

let title = 'What is a Browser?'
let subtext = 'have you ever wondered?'
let meta = 'by techedlaksh | February 2025'
let mentions = ''

let [p1, p2, p3, p4, p5] = ['', '', '', '', '']

p1 = `
    A web browser is an application for accessing websites as stated on Wikipedia.
    Now realistically that is all it needs to be and so was the vision of developers 
    back in 1990's. You typed a URL, hit enter and waited while the modem tried it's 
    best to fetch the content.

    ${addBreak(2)}

    Now a days I feel old and it seems like Internet Explorer is still older than
    me or atleast the original-non-chromium browser that Microsoft released to compete
    with Netscape Navigator. (I used to show off Navigator Browser as a flex in school
    like you would a rare Pokemon card)

    ${addBreak(2)}

    Fast forward to now, and the browser has become something much more than 
    "just a tool". It's where you watch while eating, doomscroll while working,
    shop on your little breaks and chat with strangers albiet good or bad.

    ${addBreak(2)}

    Over the last few decades, I have tried many browsers Chrome, Firefox, Safari 
    and I even gave Konquerer a chance when I was using KDE as my daily driver. 

    ${addBreak(2)}

    Albeit now a days, I have landed on Arc. For me it has become a second brain, 
    this is the place I organise, this is the place I learn, this is the place I 
    come to many times a day for almost everything. It's a tab-folders-spaces-extensions 
    hoarding monster that probably has more info about my daily life than my journal. 
    I use Arc more than I use Finder in macOS

    ${addBreak(2)}

    Technically browsers really interest me as not only they just parse HTML now
    but has evolved to a platform, rendering different javascript engines —
    V8, SpiderMonkey, JavascriptCore — 
    powering respectively the Big 3 of browsers –
    Chrome, Firefox and Safari.

    ${addBreak(2)}

    Where running "window.alert('Hello World')" was a world of wonders now can power
    a whole music player software, such as Spotify.

    ${addBreak(2)}

    Did you know, tabs are not just UI built on "+" sign but a fully isolated environment
    that's why shady websites just can not steal your banking password, even if a tab is crashed
    it is so well isolated, it would not hinder with your other "important" 50 tabs.

    ${addBreak(2)}

    I yet have not even shared at the marvelous in-built tools that are made for developers
    only which are surprisingly really really good. At this point I do think, there should
    exist a developers-debug-only Browser that is from ground-up to accelerate the development
    process.`
p2 = `
    Anecdote:${addBreak(1)}
    I asked AI to read my blog and create an almost poetic one line statement and 
    this what it came up with:
    ${addBreak(1)}
    ${stylise("Once a humble window to peek at static pages, the browser’s morphed—now a\
    sprawling beast, hoarding tabs, slurping data, and whispering ads, less a tool,\
    more a mirror of our restless, fractured minds.", "italic")}

`

let content = `
${p1} <br> <br>
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

mentions = `
    Upcoming: How does browser actually works under the hood ?
`

mentions = `
    ${p2} <br> <br>
`

titleElement.appendChild(subtextElement)
titleElement.appendChild(metaElement)
contentPara.appendChild(titleElement)

contentPara.innerHTML += content
main.appendChild(contentPara)

function format(command, value) {
    document.execCommand(command, false, value)
}

let htmlEditorDemo = document.createElement('div')
htmlEditorDemo.setAttribute("class", "html-editor-demo")

let htmlEditorToolbar = document.createElement('div')
htmlEditorToolbar.setAttribute("class", "html-editor-toolbar")

let boldButton = document.createElement("button")
boldButton.setAttribute("class", "html-editor-toolbar-btn")
boldButton.innerText = "Bold"
boldButton.onclick = () => format("bold")

let italicButton = document.createElement("button")
italicButton.setAttribute("class", "html-editor-toolbar-btn")
italicButton.innerText = "Italic"
italicButton.onclick = () => format("italic")

let underlineButton = document.createElement("button")
underlineButton.setAttribute("class", "html-editor-toolbar-btn")
underlineButton.innerText = "Underline"
underlineButton.onclick = () => format("underline")

const colors = ["aquamarine", "bisque", "gold", "coral", "crimson", "black"]
const colorBtns = []
for (let color of colors) {
    let colorButton = document.createElement("button")
    colorButton.setAttribute("class", " html-editor-toolbar-btn html-editor-toolbar-color-btn")
    colorButton.style.background = color
    colorButton.onclick = () => format("foreColor", color)
    colorBtns.push(colorButton)
}

let leftAlignButton = document.createElement("button")
leftAlignButton.setAttribute("class", "html-editor-toolbar-btn")
leftAlignButton.innerText = "Left"
leftAlignButton.onclick = () => {
    document.getElementsByClassName("html-editor-content")[0].focus()
    format("selectAll")
    format("justifyLeft")
    document.getElementsByClassName("html-editor-content")[0].blur()
}

let centerAlignButton = document.createElement("button")
centerAlignButton.setAttribute("class", "html-editor-toolbar-btn")
centerAlignButton.innerText = "Center"
centerAlignButton.onclick = () => {
    document.getElementsByClassName("html-editor-content")[0].focus()
    format("selectAll")
    format("justifyCenter")
    document.getElementsByClassName("html-editor-content")[0].blur()
}

let rightAlignButton = document.createElement("button")
rightAlignButton.setAttribute("class", "html-editor-toolbar-btn")
rightAlignButton.innerText = "Right"
rightAlignButton.onclick = () => {
    document.getElementsByClassName("html-editor-content")[0].focus()
    format("selectAll")
    format("justifyRight")
    document.getElementsByClassName("html-editor-content")[0].blur()
}

let copyButton = document.createElement("button")
copyButton.setAttribute("class", "html-editor-toolbar-btn")
copyButton.innerText = "Copy"
copyButton.onclick = () => format("copy")



htmlEditorToolbar.appendChild(leftAlignButton)
htmlEditorToolbar.appendChild(centerAlignButton)
htmlEditorToolbar.appendChild(rightAlignButton)
colorBtns.forEach(btn => htmlEditorToolbar.appendChild(btn))
htmlEditorToolbar.appendChild(boldButton)
htmlEditorToolbar.appendChild(italicButton)
htmlEditorToolbar.appendChild(underlineButton)

let htmlEditorContent = document.createElement('div')
htmlEditorContent.setAttribute("class", "html-editor-content")
htmlEditorContent.setAttribute("contenteditable", true)
htmlEditorContent.innerText += `\
    Click me.\nHello, this is a demo of a simple Rich Text Style in HTML based Editors.\n\
    Select the text and stylise it using the toolbar.\
`

htmlEditorDemo.innerHTML += `browser power — mini editor experiment ${addBreak(1)}`
htmlEditorDemo.innerHTML += `this only took me 30 mins to make with little html and js (aside from making it look decent)${addBreak(2)}`
htmlEditorDemo.appendChild(htmlEditorToolbar)
htmlEditorDemo.appendChild(htmlEditorContent)
main.appendChild(htmlEditorDemo)

let lineBreak = document.createElement('hr')
lineBreak.style.width = "100%"

let mentionElement = document.createElement('p')
mentionElement.style.width = "100%"
mentionElement.innerHTML += mentions

main.appendChild(lineBreak)
main.appendChild(mentionElement)

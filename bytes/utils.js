function orderedList(seed='', increase=true) {
    !orderedListConfig[seed] && (orderedListConfig[seed] = 0)
    if (!increase) return `<a href="#byteMention-${orderedListConfig[seed]}" id="mention-${orderedListConfig[seed]}"><<<</a>`
    return orderedListConfig[seed] += 1
}

function makeSup(content='') {
    content = `<a href="#mention-${content}" id="byteMention-${content}" style="scroll-margin-top: 5em;"><sup>[${content}]</sup></a>`
    return content
}

function createLink(content='', link='', lineBreak=false) {
    return `<a href="${link}" target="_blank" rel="noopener noreferrer">${content}</a>${lineBreak? "<br>": ""}`
}

function addSpace(mode='') {
    let config = {
        'one' : '&ensp;',
        'two' : '&nbsp;',
        'four' : '&emsp;',
    }
    return config[mode]
}

function stylise(text='', style='') {
    let config = {
        'bold' : `<b>${text}</b>`,
        'strike' : `<del>${text}</del>`,
        'new' : `<ins>${text}</ins>`,
        'italic' : `<i>${text}</i>`,
    }

    return config[style] || text
}

function point(style='') {
    let config = {
        'brackets': '&lt;&gt;'
    }

    return config[style] || ''
}

function joinText(toJoin=[], sep='') {
    let joinedText = ''
    while (toJoin.length) {
        joinedText += `${toJoin.pop()} ${sep}`
    }
    return joinedText
}

function createClassString(classes=[]) {
    return classes.join(' ')
}

function createElement(content, classString, tag='div') {
    let el =  document.createElement(tag)
    classString && el.setAttribute("class", classString)
    el.innerHTML += content
    return el
}

function addBreak(n=0) {
    return '<br>'.repeat(n)
}

function addImage(name) {
    let imgElem = `
        <div class='image'><br><img src='../assets/${name}' alt='${name}'/></div>
    `
    return imgElem
}

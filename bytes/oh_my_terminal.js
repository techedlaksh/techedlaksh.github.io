let orderedListConfig = {}

let title = ''
let subtext = ''
let meta = ''

title = 'Oh My Setup: A Config Story'
subtext = 'what happens before writing my first letter of code in MacOS'
meta = 'by techedlaksh | March 2023'

let [p1, p2, p3, p4] = ['', '', '', '']

p1 = '\
    First and foremost, this particular byte reflect my own setup and is written specifically for future me. If you are reading this then probably somebody has deemed this byte useful and has shared this with you. Happy Reading!!\
'

p2 = `
    My love for terminal goes way back. Ever since I first ran the command \`htop\` on my Ubuntu 13.10 back in 2014,
    I have been hooked on Terminals and their flexibility to run almost everything and as a professional nerd,
    I try to keep my terminal setup custom${makeSup(orderedList('byteMentions'))} to my needs which now involves basically becoming a config manager 
    yourself to manage other configs which manages your setup.
`

p3 = `\
    List of Installations:<br>
    - ${createLink('Karabiner-Elements', 'https://karabiner-elements.pqrs.org/', true)}
    ${addSpace('four')}<> To remap my keys on my external keyboards to a standard mac style keys and some quirks like mapping capslock to esc <br>
    - ${createLink('Raycast', 'https://www.raycast.com/', true)}
    ${addSpace('four')}<> To remap my keys on my external keyboards to a standard mac style keys <br>
    - ${createLink('Alacritty', 'https://github.com/alacritty/alacritty', true)}
    ${addSpace('four')}<> To remap my keys on my external keyboards to a standard mac style keys <br>
    - ${createLink('Zsh', 'https://www.zsh.org/', true)}
    ${addSpace('four')}<> To remap my keys on my external keyboards to a standard mac style keys <br>
    - ${createLink('Oh My Zsh', 'https://ohmyz.sh/', true)}
    ${addSpace('four')}<> To remap my keys on my external keyboards to a standard mac style keys <br>
    - ${createLink('tmux', 'https://github.com/tmux/tmux/wiki', true)}
    ${addSpace('four')}<> To remap my keys on my external keyboards to a standard mac style keys <br>
`
p3 = `\
    List of Installations:<br>
    - ${createLink('Karabiner-Elements', 'https://karabiner-elements.pqrs.org/', true)}
    - ${createLink('Raycast', 'https://www.raycast.com/', true)}
    - ${createLink('Alacritty', 'https://github.com/alacritty/alacritty', true)}
    - ${createLink('Zsh', 'https://www.zsh.org/', true)}
    - ${createLink('Oh My Zsh', 'https://ohmyz.sh/', true)}
    - ${createLink('tmux', 'https://github.com/tmux/tmux/wiki', true)}
    - ${createLink('helix', 'https://github.com/helix-editor/helix', true)}
    - ${createLink('neovim', 'https://github.com/neovim/neovim', true)}
`
p4 = `
    I am gonna keep this short and concise on this as there are lot of great explainations${makeSup(orderedList('byteMentions'))} out on Internet about these. <br>
    ${stylise(point('brackets'), 'bold')} ${stylise('Karabiner-Element', 'it')} is being used to remap my keys on external keyboards to a standard mac style key setup as well as some quirks like mapping my capslock to esc or to map my mouse to keyboard for easy gameplace <br>
    ${stylise(point('brackets'), 'bold')} ${stylise('Raycast', '')} is a a great, extensible Open Source launcher and an alternative to the default Spotlight in MacOS. I have been using raycast for my daily task of spotlight as well as it's community based extensions such as ${createLink('Rectangle', '')} window management,
    custom scripts for launching Alacritty with the respective config, different hotkeys, aliases and many other rich features. <br>
    ${stylise(point('brackets'), 'bold')} As for my terminal, built upon on Rust, one and only "Alacritty". It lacks the traditional UI preferences but allows for an extensive configuration through config files. <br>
    <!-- My Alacritty config files can be found on my ${createLink('dotfiles', '')} github repo. --!>
    ${stylise(point('brackets'), 'bold')} I refer ${stylise('Zsh', 'it')} as zazzing up my terminal tool. Custom prompt, color themes, better history search. Look beside that boring bash shell and step into the light of zsh. <br>
    ${stylise(point('brackets'), 'bold')} ${stylise('Oh My Zsh', 'it')} is a tool to manage zsh config. Ofcourse to create a config for your terminal everybody created another config to create config for your terminal, classic problem solving. Kidding aside, OMZ provides a lot of ready to install plugins which can be very useful, to name a few, git plugin, command autosuggestion, history on boost, zsh-autocompletion . <br>
    ${stylise(point('brackets'), 'bold')} ${stylise('Tmux', 'it')}, the beloved terminal multiplexer. This goes especially great with Alacritty as the terminal doesn't allow for multiple tabs and I am not a fan of multiple window system unless it's necessary. One of my favourite features of tmux are panes and session manager. <br>
    ${stylise(point('brackets'), 'bold')} ${stylise('Helix', 'it')} and ${stylise('Neovim', 'it')} are terminal editors which are very good at what they do, "text editing" as fast as possible. I have been using vim for almost half a decade now and helix has been talked up a lot in the terminal editor dev community only after couple of years in development, 
    which is still not my first prefernce but giving it a try before discarding it all together.
`

p5 = `
    All of my config files can be found on my ${createLink('dotfiles', 'https://github.com/techedlaksh/dotfiles')} github repo.
`

p5 = `
    All of my config files can be found on my ${stylise(createLink('dotfiles'), 'strike')}${stylise(createLink('temp-config', 'https://github.com/techedlaksh/temp-config'), 'new')} github repo.
`

let content = `
${p1} <br> <br>
${p2} <br> <br>
${p3} <br> <br>
${p4} <br> <br>
${p5} <br> <br>
`
let main = document.getElementById('main')
let contentPara =  document.createElement('p')

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

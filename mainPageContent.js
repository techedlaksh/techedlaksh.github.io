let [p1, p2, p3, p4] = ['', '', '', '']

p1 = 'I write code for my own entertainment and the love I have for it. Professionally, I am a Software Engineer, mentor and personally, an <a href = "https://en.wikipedia.org/wiki/Existentialism"> existensial thinker.</a>'

p2 = ' Currently I am working with Martin Grasser at his And Repeat Studio as a Creative Developer, creating Generative Art and bringing art projects to digital world and a screen near you. Over the years, my work has stretched across art with code, playing with data and teaching machine the meaning of real world data. In my career I have had wore many different hats such as data scientist, data engineering, full stack engineering and ofcourse an unpaid intern.'

p3 = 'In today\'s time, I am exploring 3D space and it\'s relation with our daily viewing uninteresting 2D flat screens, learning maths and physics (all that fun stuff) and subjectivity of the art world & it\'s art, tinkering around Game Mechanics of games. Oh also some amazing Space stuff (Earth is really a pea in ocean).'

p4 = 'I get excited about disruptive things for instance Generative Art making ways in the form of NFT or Rust being dubbed as better than C/C++ and anything that is a foundation such as Screen-based Text Editors (vi[m]) or Neural Network actually first came around 1943 and not a 21st Century mircale. Also I really love travelling.'

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
let test = 'Content'
let main = document.getElementById('main')
let contentPara =  document.createElement('p')
contentPara.innerHTML = content
main.appendChild(contentPara)


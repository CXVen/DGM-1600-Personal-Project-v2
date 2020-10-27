import { films } from './data/films.js'
import { people } from './data/people.js'

const main = document.querySelector('main')

for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = 'https://starwars-visualguide.com/assets/img/films/2.jpg'
    
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[step].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)

}
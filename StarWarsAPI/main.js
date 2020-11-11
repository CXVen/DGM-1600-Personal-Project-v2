import { films } from '../data/films.js'

const main = document.querySelector('main')

for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src =   `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
    
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[step].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)

}


import { films } from '../data/films.js'
import { getLastNumber } from '../utils/index.js'

const main = document.querySelector('main')



for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` 
    let figCaption = document.createElement('figcaption')
    
    const foundFilm = films.find(film => parseInt(getLastNumber(film.url)) === (step + 1))
    figCaption.textContent = foundFilm.title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
  }
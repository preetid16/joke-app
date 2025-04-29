import laughing from "./assets/laughing.svg"

import "./style.css"
import generateJoke from "./laughing.js"

const laughImg = document.getElementById("laughImg")
laughImg.src = laughing

const joke = document.getElementById("joke")
joke.innerHTML = generateJoke()

const jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click", () => {
  joke.innerHTML = generateJoke()
})

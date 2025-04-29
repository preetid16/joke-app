import joke from "./assets/json/jokes.json"

const generateJoke = () => {
  // Get a random index within the bounds of the joke array
  const randomIndex = Math.floor(Math.random() * joke.length)
  // Return the joke at the random index
  return joke[randomIndex]
    ? joke[randomIndex]?.joke
    : "I was wondering why the frisbee was getting bigger, then it hit me."
}

export default generateJoke

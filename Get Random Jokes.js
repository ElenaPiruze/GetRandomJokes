let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");
let button = document.getElementById("btn");
const url = `https://official-joke-api.appspot.com/random_joke`;

async function getJoke() {
  try {
    let responseForJokes = await fetch(url);
    let parsedResponseForJokes = await responseForJokes.json();
    console.log(parsedResponseForJokes);
    printJokes(parsedResponseForJokes);
  } catch (error) {
    console.log(error);
  }
}

function printJokes(theJokes) {
  console.log(theJokes);
  setup.innerHTML = "";
  setup.innerHTML = theJokes.setup;
  punchline.innerHTML = "";
  setTimeout(() => (punchline.innerHTML = theJokes.punchline), 3000);
}

button.addEventListener("click", () => {
  getJoke();
});

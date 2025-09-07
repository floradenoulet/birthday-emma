
import { getGuesses, resetGuesses } from "./storage.js";
import { messages } from "./data.js";
import { getMessage } from "./helpers.js";


function renderGuessed() {
  document.querySelectorAll("div").forEach((div) => {div.classList.add("hidden");})
  const $guessed = document.querySelector("div#guessed");
  $guessed.classList.remove("hidden");

  const amountOfGuesses = getGuesses();
  resetGuesses();
  $guessed.querySelector("#amount").innerHTML = amountOfGuesses;
  $guessed.querySelector("#message").innerHTML = getMessage(messages, amountOfGuesses);
}


export { renderGuessed };

import {encrypt, pwdIsCorrect} from "./helpers.js";


function tryPassword(e) {
  e.preventDefault();
  checkPassword(document.querySelector("input#pwd").value);
}

function checkPassword(guessedPassword) {
  if (pwdIsCorrect(encrypt(guessedPassword))) {
    console.log("Correct");
    document.querySelector("body").classList.add("pink");
  } else {
    console.log("Incorrect");
    document.querySelector("body").classList.remove("pink");
  }
}


export { tryPassword };
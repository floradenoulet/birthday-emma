
import { tryPassword, showHint, goToEnd } from "./handlers.js";
import { resetGuesses } from "./storage.js";


init();


function init() {
    resetGuesses();
    document.querySelector("form").addEventListener("submit", tryPassword);
    document.querySelector("a#forgotten").addEventListener("click", showHint);
    document.querySelector("a#to-end").addEventListener("click", goToEnd);
}
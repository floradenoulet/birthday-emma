
import { tryPassword, showHint } from "./handlers.js";
import { resetGuesses } from "./storage.js";


init();


function init() {
    resetGuesses();
    document.querySelector("form").addEventListener("submit", tryPassword);
    document.querySelector("a#forgotten").addEventListener("click", showHint);
}
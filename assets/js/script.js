
import { tryPassword, showHint } from "./handlers.js";


init();


function init() {
    document.querySelector("form").addEventListener("submit", tryPassword);
    document.querySelector("a#forgotten").addEventListener("click", showHint);
}

import { tryPassword } from "./handlers.js";


init();


function init() {
    document.querySelector("form").addEventListener("submit", tryPassword);
}
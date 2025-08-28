"use strict";

document.addEventListener("DOMContentLoaded", init);

const pwd = "Test123"

function init() {
    document.querySelector("form").addEventListener("submit", tryPassword);
}

function tryPassword(e) {
    e.preventDefault();
    checkPassword(document.querySelector("input#pwd").value);
}

function checkPassword(guessedPassword) {
    if (guessedPassword === pwd) {
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
}
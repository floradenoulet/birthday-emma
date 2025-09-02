"use strict";

document.addEventListener("DOMContentLoaded", init);

const correctPwdEncrypted = [69, 109, 109, 97, 50, 48, 55357, 56473, 122, 101, 118, 101, 110, 47, 49, 50, 83, 110, 111, 101, 115, 106, 101];

function init() {
    document.querySelector("form").addEventListener("submit", tryPassword);
}
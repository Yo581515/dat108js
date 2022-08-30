"use strict";

function run(event) {
    window.setInterval(
        () => {event.target.classList.toggle("gyldig")}
        ,2000
    );
}

function init() {
    const rootElm = document.getElementById("root");
    const button = rootElm.querySelector("button[type='button']")
    button.addEventListener("click",run);
}

document.addEventListener("DOMContentLoaded",init);

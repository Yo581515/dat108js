"use strict";

function callback(event) {
    console.clear();
    console.log(`Hendelsen er av type '${event.type}'`);
    console.log(`Elementet som er mål for hendelsen er ${event.target}`);
    console.log(`Elementet har tagg ${event.target.tagName}`);
    console.log(`Hendelsen skjedde på skjermen i (x,y) posisjon (${event.screenX},${event.screenY})`);
    console.log(`Hendelsen skjedde i nettleser i (x,y) posisjon (${event.clientX},${event.clientY})`);
    if (event.ctrlKey) {
        console.log(`Ctrl-tasten var aktiv når hendelsen skjedde`);
    } else {
        console.log(`Ctrl-tasten var ikke aktiv når hendelsen skjedde`);
    }
    if (event.altKey) {
        console.log(`Alt-tasten var aktiv når hendelsen skjedde`);
    } else {
        console.log(`Alt-tasten var ikke aktiv når hendelsen skjedde`);
    }
    console.log(`Hendelsen skjedde ${event.timeStamp} millisekunder etter at dokumentet ble lastet`);
}

function init() {
    const rootElement = document.getElementById("root");
    rootElement.querySelector("button[type='button']").addEventListener("click",callback);
}

document.addEventListener('DOMContentLoaded',init);

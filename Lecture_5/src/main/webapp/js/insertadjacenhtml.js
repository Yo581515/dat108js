"use strict";

/**
 * Klasse for å håndter visning av liste med frukt.
 * på websiden.
 */
class FruitController {
    /**
     * Initialiserer FruitController
     * @param {HTMLElement} root - HTML container-element
     */
    constructor(root) {
        /** @private {HTMLElement} */ this.fruitElm = root.querySelector("div[data-fruitlist]")
        this.addFruit = this.addFruit.bind(this);
        this.clean = this.clean.bind(this);

        this.fruitElm.classList.add("fruitcontroller_hidden");

        const addBt = root.querySelector("button[data-addfruit]");
        addBt.addEventListener("click",this.addFruit);

        const cleanBt = root.querySelector("button[data-clean]");
        cleanBt.addEventListener("click",this.clean);
    }

    /**
     * Metode som legger til ny frukt i listen og viser listen.
     * @private
     * @listens Button:click
     */
    addFruit() {
        const fruit = window.prompt("Legg til frukt");
        const listElm = this.fruitElm.querySelector("ul");
        listElm.insertAdjacentHTML('beforeend', "<li></li>");
        listElm.lastElementChild.textContent = fruit;
        this.fruitElm.classList.remove("fruitcontroller_hidden");
    }

    /**
     * Metode som sletter og skjuler frukt-listen
     * @private
     * @listens Button:click
     */
    clean() {
        this.fruitElm.classList.add("fruitcontroller_hidden");
        this.fruitElm.querySelector("ul").textContent = null;
    }
}

function init() {
    const rootElm =  document.getElementById("root");
    new FruitController(rootElm);
}
document.addEventListener('DOMContentLoaded',init);

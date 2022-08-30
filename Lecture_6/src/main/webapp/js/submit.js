"use strict";

class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor (rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement
        this.handleSubmit = this.handleSubmit.bind(this);

       /**
        * Legger til lytter for hendelse 'submit' på FORM skjema elementet.
        * Ved 'submit' kjøres klassen sin metode 'handleSubmit'
        */
        const formElement = this.root.querySelector("form");
       formElement.addEventListener("submit",this.handleSubmit);
    }

    /**
     * Metode som viser info om submit-hendelsen.
     * Metoden vil også kansellerer submit sin standardoppførsel.
     * @private
     * @param {Event} event - Submit event objektet for hendelsen
     * @listens FORM:submit
     */
    handleSubmit(event) {
        console.clear();
        console.log(`Hendelse '${event.type}' skjedde.`);
        console.log(`Hendelsen ble trigget av ${event.submitter}`);
        console.log(`Kansellerer standardoppførsel til '${event.type}'`);

       /**
        * Kansellerer submit sin standardoppførsel, som er å sende data til tjener.
        */
        event.preventDefault();
    }
}

function init() {
    const rootElm =  document.getElementById("root");
    new Demo(rootElm);
}
document.addEventListener('DOMContentLoaded',init);


"use strict";

class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor (rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement
        this.run = this.run.bind(this);

        /**
         * Legger til lytter for hendelse 'click' på alle BUTTON elementet.
         * Ved 'click' på en HTML BUTTON kjøres metoden console.clear som tømmer nettleserkonsollet.
         */
        const btElm = this.root.getElementsByTagName("button")[0];
        btElm.addEventListener("click",console.clear);

        /**
         * Legger til lytter for hendelse 'invalid' på INPUT element for etternavn.
         * Ved 'invalid' kjøres klassen sin metoden 'run'.
         */
        const fnElm = this.root.querySelector("input[name='fornavn']");
        fnElm.addEventListener("invalid",this.run);

        /**
         * Legger til lytter for hendelse 'invalid' på INPUT element for fornavn.
         * Ved 'invalid' kjøres klassen sin metoden 'run'.
         */
        const lnElm = this.root.querySelector("input[name='etternavn']");
        lnElm.addEventListener("invalid",this.run);

        /**
         * Legger til lytter for hendelse 'invalid' på INPUT element for telefonnummer.
         * Ved 'invalid' kjøres klassen sin metoden 'run'.
         */
        const tfElm = this.root.querySelector("input[name='telefon']");
        tfElm.addEventListener("invalid",this.run);
    }

    /**
     * Metode som logger info om hendelsen i nettleser-konsollet.
     * @private
     * @param {Event} event - Invalid event objektet for hendelsen
     * @listens HTMLInputElement:invalid
     */
    run(event) {
        console.log(`Hendelse '${event.type}' fra element '${event.target.name}' ved tid ${event.timeStamp}: '${event.target.value}'`);
    }
}

function init() {
    const rootElm =  document.getElementById("root");
    new Demo(rootElm);
}
document.addEventListener('DOMContentLoaded',init);


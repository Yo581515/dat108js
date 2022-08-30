"use strict";

class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor (rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement;
        this.demo = this.demo.bind(this);

        /**
         * Legger på lytter ved klikk på demo0.
         * Ved pilnotasjon vil 'this' beholde verdien den hadde.
         */
        const b0 = this.root.querySelector("button[data-button='0']");
        b0.addEventListener(
            "click",
            (event) => {this.demo(event,"gyldig")}
        );

        /**
         * Legger på lytter ved klikk på demo1.
         * Ved bruk av 'function' gis ny verdi til 'this'.
         * Koden  vil feile da 'this' settes til HTML-elementet som trigget hendelsen.
         */
        const b1 = this.root.querySelector("button[data-button='1']");
        b1.addEventListener(
            "click",
            function(event){this.demo(event,"gyldig")}
        );

        /**
         * Legger på lytter ved klikk på demo2.
         * Mellomlagrer verdien til 'this' i 'self' og bruker den
         * inne i funksjonen. Ved bruk av 'function' gis ny verdi til 'this',
         * men 'self' har tatt vare på den opprinnelige verdien.
         */
        const b2 = this.root.querySelector("button[data-button='2']");
        const self = this;
        b2.addEventListener(
            "click",
            function(event){self.demo(event,"gyldig")}
        );
    }

    /**
     * Metode som toggler et HTML CLASS attributt på mål for hendelse
     * @private
     * @param {Event} event - Klikk-hendelsen
     * @param {String} className - HTML CLASS attributt som skal toggles
     * @listens HTMLButton:click
     */
    demo(event,className) {
        event.target.classList.toggle(className);
    }
}

function init() {
    const rootElm =  document.getElementById("demoroot");
    new Demo(rootElm);
}
document.addEventListener('DOMContentLoaded',init);


"use strict";

class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor (rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement
        this.demo0 = this.demo0.bind(this);
        this.demo1 = this.demo1.bind(this);

        this.info0 = this.info0.bind(this);
        this.info1 = this.info1.bind(this);

        /**
         * Legger til lytter for hendelse 'click' på HTML BUTTON elementet.
         * Ved 'click' på HTML BUTTON kjøres metoden 'demo0'.
         * Ved 'click' vil denne metoden vil legge til en lytter for 'DOMContentLoaded', men da er det for sent. Hendelsen har allerede skjedd.
         */
        const bt = this.root.querySelector("button");
        bt.addEventListener("click",this.demo0);

        /**
         * Ettter en tidsforsinkelse kjøres klassen sin metode 'demo1'.
         * Denne metoden vil legge til en lytter for 'DOMContentLoaded', men da er det for sent. Hendelsen har allerede skjedd.
         */
        window.setTimeout(this.demo1,1000);
    }

    /**
     * Metode som legger på lytter for 'DOMContentLoaded'.
     * @private
     */
    demo0() {
        console.log("demo0: Etter klikk på knapp, legger på lytter for 'DOMContentLoaded', men det er for sent!");

        /**
         * Legger til lytter for hendelse 'DOMContentLoaded' på 'document', men det er for sent.
         * Denne vil aldri fyre, da hendelsen allered har skjedd.
         */
        document.addEventListener('DOMContentLoaded',this.info0);
    }

    /**
     * Metode som legger på lytter for 'DOMContentLoaded'.
     * @private
     */
    demo1() {
        console.log("demo1: Etter timout, legger på lytter for 'DOMContentLoaded', men det er for sent!");

        /**
         * Legger til lytter for hendelse 'DOMContentLoaded' på 'document', men det er for sent.
         * Denne vil aldri fyre, da hendelsen allered har skjedd.
         */
        document.addEventListener('DOMContentLoaded',this.info1);
    }

    info0(event) {
        console.log(`B: Hendelse '${event.type}' skjedde etter ${event.timeStamp} millisekunder`);
    }

    info1(event) {
        console.log(`C: Hendelse '${event.type}' skjedde etter ${event.timeStamp} millisekunder`);
    }
}

function init(event) {
    console.log(`A: Hendelse '${event.type}' skjedde etter ${event.timeStamp} millisekunder`);
    const rootElm =  document.getElementById("demoroot");
    new Demo(rootElm);
}

/**
 * Legger til lytter for hendelse 'DOMContentLoaded' på 'document'.
 * Ved 'DOMContentLoaded' kjøres metoden 'init'.
 */
document.addEventListener('DOMContentLoaded',init);


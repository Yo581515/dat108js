"use strict";

function demo0() {
    /**
     * Kode som feiler, da hverken 'a' eller 'b' er definert.
     */
    return a/b;
}

function demo1() {
    /**
     * Funksjon som feiler, da metode 'aaa' ikke finnes.
     */
    aaa();
}

/**
 * Callback for error som viser info om error-hendelsen i nettleserkonsollet.
 * Funksjonen vil også kansellere 'error' sin standardoppførsel.
 */
function handleError(event) {
    console.log(`Hendelse: '${event.type}'`);
    console.log(`Feil: '${event.message}'`);
    console.log(`JS-fil: ${event.filename}`);
    console.log(`Feilen er på linje ${event.lineno} i filen`);

    /**
     * Kansellerer error sin standardoppførsel, som er å vise feilmelding i nettleser-konsollet.
     */
    event.preventDefault();
}

window.addEventListener("error",handleError);

const demomanager = {
    init(demoHandler) {
        this.demoHandler = demoHandler;
        this.viewcode = this.viewcode.bind(this);

        /**
        * Legger til lytter for hendelse 'click' på alle HTML BUTTON elementer.
        * Ved 'click' på en HTML BUTTON kjøres flere metoder:
        * 1. console.clear som tømmer konsollet
        * 3. En metode gitt av elementet sitt attributt 'data-demo'.
        * 2. Objektet sin metode 'viewcode' som viser kilden for metoden i punktet over.
        * Verdien til 'data-demo' er 'demo0' for første BUTTON, 'demo1' for neste osv.
        */

        const buttons = this.demoHandler.getElementsByTagName("button");
        Array.from(buttons).forEach(
            (button) => {
                const methodName = button.getAttribute("data-demo");
                if (window[methodName] === undefined) return;
                const method = window[methodName];
                if (typeof method !== "function") return;
                button.addEventListener('click', console.clear, true);
                button.addEventListener('click', this.viewcode, true);
                button.addEventListener("click", method);
            }
        )
    },

    viewcode(event) {
        const viewElm = this.demoHandler.querySelector("pre[data-viewelm]");
        const methodName = event.target.getAttribute("data-demo");
        if (window[methodName] === undefined) return;

        const functext = window[methodName].toString();
        viewElm.textContent = functext;
        viewElm.classList.add("demo");
    }
}

function init() {
    const rootDemoHandler = document.getElementById("demoHandler");
    demomanager.init(rootDemoHandler);
}
document.addEventListener('DOMContentLoaded', init);

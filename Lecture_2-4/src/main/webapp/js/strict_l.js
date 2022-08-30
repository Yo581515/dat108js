/**
 * Aksesserer variabel som ikke er deklarert.
 * Koden vil kjøre siden det ikke brukes "strict mode".
 */
number = 7;

function demo0() {
    "use strict";

    /**
     * Funksjonen bruker lokal "strict mode", dvs. at "strict mode" er gyldig for koden
     * i funksjonen.
     *
     * Tilorder verdi nedenfor til en variabel som ikke er deklarert.
     * Funksjonen feiler siden det her brukes "strict mode" inne i funksjonen.
     */
    firstname = "Ole";
    console.log(firstname);
}

function demo1() {
    "use strict";

    /**
     * Funksjonen bruker lokal "strict mode", dvs. at "strict mode" er gyldig for koden
     * i funksjonen.
     *
     * Aksesserer global variabel som ikke ble deklarert, men ble gitt verdi.
     * Funksjonen kjører siden den globale variabelen har verdi.
     */

    console.log(`A: ${number}`);
    number = 8;
    console.log(`B: ${number}`);
}

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
        let functext;
        const methodName = event.target.getAttribute("data-demo");
        if (window[methodName] === undefined) return;

        switch (methodName) {
            case "demo1":
                functext = "number = 7;";
                functext += "\n\n";
                break;
            default:
                functext = "";
        }

        functext += window[methodName].toString();
        viewElm.textContent = functext;
        viewElm.classList.add("demo");
    }
}

function init() {
    const rootDemoHandler = document.getElementById("demoHandler");
    demomanager.init(rootDemoHandler);
}
document.addEventListener('DOMContentLoaded', init);

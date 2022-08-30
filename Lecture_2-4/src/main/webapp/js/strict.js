function demo0() {
    /**
     * Aksesserer variabel som ikke er deklarert.
     * Funksjonen vil kjøre siden det ikke brukes "strict mode".
     */

    ta = 6;
    console.log(ta);
}

function demo1() {
    "use strict";

    /**
     * Aksesserer variabel som ikke er deklarert.
     * Funksjonen feiler siden det her brukes "strict mode".
     */

    console.log("Denne vil feile!");
    tb = 6;
    console.log(tb);
}

function demo2() {
    /**
     * Forsøker å gi verdi til NaN som er en konstant.
     * Funksjonen vil kjøre siden det ikke brukes "strict mode",
     * men kontanten blir ikke endret.
     */

    NaN = 6;
    console.log(NaN);
}

function demo3() {
    "use strict";

    /**
     * Forsøker verdi til NaN som er en konstant.
     * Funksjonen feiler siden det her brukes "strict mode".
     */
    console.log("Denne vil feile!");
    NaN = 6;
    console.log(NaN);
}

function demo4() {
    /**
     * Forsøker å endre en kun lesbar egenskap.
     * Funksjonen vil kjøre siden det ikke brukes "strict mode",
     * men egenskapen blir ikke endret.
     */

    let o = {
        "number": 7
    };
    Object.freeze(o);
    console.log(o.number);
    o.number = 6;
    console.log(o.number);
}

function demo5() {
    "use strict";

    /**
     * Forsøker å endre en kun lesbar egenskap.
     * Funksjonen feiler siden det her brukes "strict mode".
     */

    let o = {
        "number": 7
    };
    Object.freeze(o);
    console.log(o.number);
    console.log("Denne vil feile!");
    o.number = 6;
    console.log(o.number);
}

function demo6() {
    /**
     * Forsøker å bruke et reservert ord som variabel.
     * Funksjonen vil kjøre siden det ikke brukes "strict mode",
     * og variabelen blir opprettet.
     */

    let public = 6;
    console.log(public);
}

function demo7() {
    "use strict";

    /**
     * Forsøker å bruke et reservert ord som variabel.
     * Funksjonen feiler siden det her brukes "strict mode".
     *
     * Bakgrunnen for "eval" er at nettleser ellers her feiler allerede ved parsing
     * da det brukes et reservert ord som variabel.
     */

    console.log("Denne vil feile!");
    eval("\
          let public = 6; \n\
          console.log(public); \
          ")

    // let public = 6
    // console.log(public)
}

function showthis() {

    /**
     * Størrelsen "this" vil alltid ha verdi når det ikke brukes "strict mode".
     * Verdien vil være en referanse til "window" hvis det ikke finnes en
     * naturlig verdi for "this".
     */

    console.log(this);
}

function showthisstrict() {
    "use strict";

    /**
     * I "strict mode" vil "this" være "undefined" hvis det ikke finnes
     * en naturlig verdi for "this".
     */

    console.log(this);
}

function demo8() {
    "use strict";

    showthis();
}

function demo9() {
    "use strict";

    showthisstrict();
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
            case "demo8":
                functext = showthis.toString();
                functext += "\n\n";
                break;
            case "demo9":
                functext = showthisstrict.toString();
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

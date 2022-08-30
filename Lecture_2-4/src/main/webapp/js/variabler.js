"use strict";

function demo0() {
    /**
     * Demonstrasjon av rekkevidde ved variabel deklarasjon med "let".
     * Variabel er kun synlig inne i blokk. Koden vil derfor feile når
     * vi referer "number" utenfor blokken der den er deklarert.
     */

    function aFunc() {
        {
            let number = 77;
            console.log(`A: ${number}`); // "number" er definert
        }
        console.log("Denne vil feile!");
        console.log(`B: ${number}`); // Error: "number" er ikke definert
    }

    aFunc();

    console.log(`C: ${number}`); // Error: "number" er ikke definert
}

function demo1() {
    /**
     * Demonstrasjon av deklarasjon av konstant med "const".
     * Verdi kan ikke endres. Koden vil derfor feile når
     * vi forsøker å tilorden "PI" til ny verdi.
     */

    const PI=Math.PI;
    console.log("Denne vil feile!");
    PI=4; // Error
}

function demo2() {
    /**
     * Demonstrasjon av deklarasjon av konstant med "const".
     * Verdi kan ikke endres, dvs. referansen. Men, objektet, her en Array kan
     * endre innhold.
     */

    const a = new Array();
    a[0] = 77; // OK, da det er referansen som er konstant
    console.log(a[0]);
}

function demo3() {
    /**
     * Demonstrasjon av deklarasjon av konstant med "const".
     * Verdi kan ikke endres, dvs. referansen. Koden vil derfor feile
     * når "a" forsøkes tilordnes til "new String()".
     */

    const a = new Array();
    console.log("Denne vil feile!");
    a = new String(); // Error
}

function demo4() {
    /**
     * Demonstrasjon av rekkevidde ved deklarasjon av konstant med "const".
     * Konstanten er kun synlig inne i blokk. Koden vil feile når
     * vi referer "number" utenfor blokken der den er deklarert.
     */

    function aFunc() {
        {
            const number = 77;
            console.log(`A: ${number}`); // "number" er definert
        }
        console.log("Denne vil feile!");
        console.log(`B: ${number}`); // Error: "number" er ikke definert
    }

    aFunc();

    console.log(`C: ${number}`); // "number" er ikke definert
}

function demo5() {
    /**
     * Demonstrasjon av rekkevidde ved variabel deklarasjon med "var".
     * Variabel er synlig overalt inne i funksjonen. Koden vil derfor feile når
     * vi referer "number" utenfor funksjonen.
     */

    function aFunc() {
        {
            var number = 77;
            console.log(`A: ${number}`); // "number" er definert
        }
        console.log(`B: ${number}`); // "number" er definert
    }

    aFunc();

    console.log("Denne vil feile!");
    console.log(`C: ${number}`); // Error: "number" er ikke definert
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


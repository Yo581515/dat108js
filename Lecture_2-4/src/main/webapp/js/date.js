"use strict";

function demo0() {
    const ms = Date.now(); // Statisk Date metode
    console.log(ms);
}

function demo1() {
    // 26. oktober som antall millisekund siden 1. januar 1970
    const ms = Date.UTC(2021,9,26); // Statisk Date metode;
    console.log(ms);
}

function demo2() {
    //  26. oktober 2021 som Date objekt
    const dato = new Date(2021,9,26);
    console.log(dato);
}

function demo3() {
    const now = new Date();

    if (now.getHours() > 12) {
        console.log("Det er nå ettermiddag");
    } else {
        console.log("Det er nå formiddag");
    }
}

function demo4() {
    const dato = new Date();
    dato.setFullYear(dato.getFullYear() + 500);
    console.log(dato);
}

function demo5() {
    const options = {weekday: 'long'};
    const l10nNODato = new Intl.DateTimeFormat("nb-NO",options);

    const dato = new Date();
    const addYears = 500;
    dato.setFullYear(dato.getFullYear() + addYears);
    console.log(`Denne dato om ${addYears} år kommer på en ${l10nNODato.format(dato)}`);
}

function demo6() {
    const options = {weekday: 'long'};

    const dato = new Date();
    const addYears = 500;
    dato.setFullYear(dato.getFullYear() + addYears);
    console.log(`Denne dato om ${addYears} år kommer på en ${dato.toLocaleDateString("nb-NO",options)}`);
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

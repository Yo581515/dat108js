"use strict";

function demo0() {
    const a = undefined;
    const b = "";
    const c = 0;
    const d = NaN;
    const e = null;
    const f = Infinity;
    let g;

    if (a) {
        console.log("a (undefined): Sann");
    } else {
        console.log("a (undefined): Usann");
    }

    if (b) {
        console.log("b (tom streng): Sann");
    } else {
        console.log("b (tom streng): Usann");
    }

    if (c) {
        console.log("c (tallet 0): Sann");
    } else {
        console.log("c (tallet 0): Usann");
    }

    if (d) {
        console.log("d (NaN): Sann");
    } else {
        console.log("d (NaN): Usann");
    }

    if (e) {
        console.log("e (null): Sann");
    } else {
        console.log("e (null): Usann");
    }

    if (f) {
        console.log("f (Infinity): Sann");
    } else {
        console.log("f (Infinity): Usann");
    }

    if (g) {
        console.log("g (mangler verid): Sann");
    } else {
        console.log("g (mangler verdi): Usann");
    }

}

function demo1() {
    const value = undefined;
    console.log(`typeof: ${typeof value}`);

    if (value === undefined) {
        console.log("Variabel er ikke definert");
    }
}

function demo2() {
    let value;
    console.log(`typeof: ${typeof value}`);

    if (value === undefined) {
        console.log("Variabel er ikke definer");
    }
}

function demo3() {
    const value = "";
    console.log(`typeof: ${typeof value}`);

    if (value === "") {
        console.log("Variabel er tom tekst");
    }
}

function demo4() {
    const value = 0;
    console.log(`typeof: ${typeof value}`);

    if (value === 0) {
        console.log("Variabel har verdien 0");
    }
}

function demo5() {
    const value = NaN;
    console.log(`typeof: ${typeof value}`);

    if (isNaN(value)) {
        console.log("Variabel er ikke et tall");
    }
}

function demo6() {
    const value = null;
    console.log(`typeof: ${typeof value}`);

    if (value == null) {
        console.log("Variabel er 'null'");
    }
}

function demo7() {
    const value = Infinity;
    console.log(`typeof: ${typeof value}`);

    if (value === Infinity) {
        console.log("Variabel har verdi Infinity");
    }
}

function demo8() {
    const value = 10 ** 1000;
    console.log(`typeof: ${typeof value}`);

    if (value === Infinity) {
        console.log("Variabel har verdi Infinity");
    }
}

function demo9() {
    const value = Math.pow(10, 1000);
    console.log(`typeof: ${typeof value}`);

    if (isFinite(value)) {
        console.log("Variabel har en endelig verdi");
    } else {
        console.log("Variabel sin verdi er uendelig");
    }
}

function demo10() {
    const value = Number.MAX_VALUE;
    console.log(`typeof: ${typeof value}`);
    console.log(`Value har verdi ${value}`);

    if (value < Infinity) {
        console.log("Variabel har en endelig verdi");
    } else {
        console.log("Variabel sin verdi er uendelig");
    }
}

function demo11() {
    const tall = Math.PI;
    console.log(`typeof: ${typeof tall}`);
    console.log(`Variabel tall har verdi ${tall}`);

    const annetTall = tall.toFixed(2);
    console.log(`typeof: ${typeof annetTall}`);
    console.log(`Variabel annetTall har verdi ${annetTall}`);
}

function demo12() {
    const tekst = "3.14";
    console.log(`typeof: ${typeof tekst}`);
    console.log(`Variabel tekst har verdi ${tekst}`);

    const tall = parseFloat(tekst); // Konverterer tekst til flyttall
    console.log(`typeof: ${typeof tall}`);
    console.log(`Variabel tall har verdi ${tall}`);
}

function demo13() {
    const tekst = "12345.7";
    console.log(`typeof: ${typeof tekst}`);
    console.log(`Variabel tekst har verdi ${tekst}`);

    const tall = parseInt(tekst); // Konverterer tekst til heltall
    console.log(`typeof: ${typeof tall}`);
    console.log(`Variabel tall har verdi ${tall}`);
}

function demo14() {
    const tall = Math.PI;
    console.log(`typeof: ${typeof tall}`);
    console.log(`Variabel tall har verdi ${tall}`);

    const tekst = tall.toString(); // Konverterer tall til tekststreng
    console.log(`typeof: ${typeof tekst}`);
    console.log(`Variabel tekst har verdi ${tekst}`);
}

function demo15() {
    const stortTall = BigInt(Number.MAX_SAFE_INTEGER);
    const veldigStortTall = stortTall ** 3n;

    console.log(`typeof: ${typeof veldigStortTall}`);
    console.log(`Variabel veldigStortTall har verdi ${veldigStortTall}`);
}

function demo16() {
    const veldigStortTall = 93n ** 12376n;

    console.log(`typeof: ${typeof veldigStortTall}`);
    console.log(`Variabel veldigStortTall har verdi ${veldigStortTall}`);
}

function demo17() {
    const stortTall = BigInt(Number.MAX_SAFE_INTEGER);
    console.log("Denne vil feile!");
    const veldigStortTall = stortTall ** stortTall;

    console.log(`typeof: ${typeof veldigStortTall}`);
    console.log(`Variabel har verdi ${veldigStortTall}`);
}

function demo18() {
    const a = Symbol();

    // Kan gi en forklarende tekst
    const b = Symbol("Unik ID");

    console.log(`typeof: ${typeof a}`);

    if (a != b) {
        console.log("To bruk av symbol vil alltid generere ulike verdier");
    }

    console.log(a);
    console.log(b);
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

"use strict";

function demo0() {
    /**
     * Vanlig tilordning. Kan også tilorden til flere variabler ved samme tilording.
     */

    const farge = "rød";
    let a, b;
    a = b = farge;

    console.log(`farge: ${farge}`);
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
}

function demo1() {
    /**
     * Tilordne variabler fra verdier i en Array.
     */

    const [a, b] = [2, 5];

    console.log(a * b);
}

function demo2() {
    /**
     * Tilordne variabler fra verdier i en Array.
     */

    const array = [2, 5];
    const [a, b] = array;

    console.log(a * b);
}

function demo3() {
    /**
     * Tilordne variabler fra verdier i en Array, og bruk av rest-operator "...".
     */

    const [a, b, ...rest] = [2, 5, 12, 14, 16];

    console.log(a * b);
    console.log(`rest: ${rest[0]}, ${rest[1]}, ${rest.length}`);
}

function demo4() {
    /**
     * Utpakke verdier fra Array, og samtidig redefinere Array.
     */

    let array = [2, 5, 12, 14, 16];
    let a, b;
    [a, b, ...array] = array;

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    array.forEach((element, index) => { console.log(`array[${index}]: ${element}`) });
}

function demo5() {
    /**
     * Tilordne to variabler fra verdier i en Array, og kaste resten.
     */

    const [a, b] = [2, 5, 12, 14, 16];
    console.log(a * b);
}

function demo6() {
    /**
     * Tilordne flere variabler fra Array med færre verdier
     */

    const [a, b, c, d] = [2];
    console.log(`a:${a}`);
    console.log(`b:${b}`);
    console.log(`c:${c}`);
    console.log(`d:${d}`);
}

function demo7() {
    /**
     * Tilordne variabler fra verdier i en Array.
     *
     * Endel operatorer i JavaScript har flere betydninger, bla. "[]" som både er JSON
     * syntaks for Array, og indekseringsoperator.
     *
     * I noen situasjoner må vi bruke ";" for å klargjøre betydningen.
     * Uten ";" i eksempelet under vil nettleser lese:
     * let b = "grønn"[a,b]
     *
     * [a,b] blir oppfattet som indekser på "grønn", og ikke JSON for en Array.
     */

    let a = "rød";
    let b = "grønn"; // Må ha semikolon her
    [a, b] = [b, a];

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
}

function demo8() {
    /**
     * Tilordne variabler fra verdier i en Array.
     * Verdier som ikke trengs kan utelates, og ",," angir en variabel-posisjon
     * der det ikke tilordnes verdi til variabel.
     */

    let [a, , c] = [1, 2, 3, 4, 5];

    console.log(`a: ${a}`);
    console.log(`c: ${c}`);
}

function demo9() {
    /**
     * Fjerne de to første verdier i Array.
     */

    let array = [2, 5, 12, 14, 16];
    [, , ...array] = array;

    array.forEach((element, index) => { console.log(`array[${index}]: ${element}`) });
}


function demo10() {
    /**
     * Direkte tilordne verdier til objektegenskaper.
     */

    const person = {
        id: 121,
        navn: "Ole"
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo11() {
    /**
     * Tilordne verdier til objektegenskaper via variabelverdier.
     */

    const number = 121;
    const name = "Ole";

    const person = {
        id: number,
        navn: name
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo12() {
    /**
     * Tilordne verdier til objekt via variabler.
     */

    const id = 121;
    const navn = "Ole";

    const person = {
        id,
        navn
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo13() {
    /**
     * Tilordne verdier til objekt med uttrykk for egenskap.
     */

    const p1 = "id";
    const p2 = "navnet";

    const person = {
        [p1]: 121,
        [p2.substring(0, 4)]: "Ole"
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}


function demo14() {
    /**
     * Objekt med funksjon.
     */

    const person = {
        born: new Date(1997, 0, 5), // 5. januar 1997
        name: "Ole",
        numdays: function() {
            const milliseconds = Date.now() - this.born.getTime();
            const days = Math.floor(milliseconds / 86400000);
            return days;
        }
    };

    console.log(`${person.name} er ${person.numdays()} dager gammel`);
}

function demo15() {
    /**
     * Objekt med funksjon på kortform.
     */

    const person = {
        born: new Date(1997, 0, 5), // 5. januar 1997
        name: "Ole",
        numdays() {
            const milliseconds = Date.now() - this.born.getTime();
            const days = Math.floor(milliseconds / 86400000);
            return days;
        }
    };

    console.log(`${person.name} er ${person.numdays()} dager gammel`);
}

function demo16() {
    /**
     * Tilordne variabler fra verdier i forekomst av Object.
     */

    const person = {
        id: 121,
        fornavn: "Ole",
        etternavn: "Olsen"
    };

    const { id, fornavn, etternavn } = person;

    console.log(`id: ${id}`);
    console.log(`fornavn: ${fornavn}`);
    console.log(`etternavn: ${etternavn}`);
}

function demo17() {
    /**
     * Tilordne variabler fra verdier i forekomst av Object,
     * og der variabelnavn ikke er likt med nøkkler i objekt.
     */

    const person = {
        id: 121,
        fornavn: "Ole",
        etternavn: "Olsen"
    };

    const { id: a, fornavn: b, etternavn: c } = person;

    console.log(`a: ${a}`);
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)
}

function summer([a, b]) {
    /**
     * Tilordning av funksjonsparametre fra Array gitt som parameter.
     */

    return a + b;
}

function demo18() {
    const array = [12, 2]
    const result = summer(array)
    console.log(result)
}

function produkt([a, b = 1, c = 2]) {
    /**
     * Tilordning av funksjonsparametre fra Array gitt som parameter,
     * med default verdier for noen parametre.
     */

    return a * b * c
}

function demo19() {
    const array = [12, 3];
    const result = produkt(array);
    console.log(result);
}

function showPerson({ id, firstname, lastname }) {
    /**
     * Tilordning av funksjonsparametre fra Object gitt som parameter.
     */

    console.log(`id: ${id}`);
    console.log(`firstname: ${firstname}`);
    console.log(`lastname: ${lastname}`);
}

function demo20() {
    const person = {
        id: 12,
        firstname: 'Ole',
        lastname: 'Olsen'
    };

    showPerson(person);
}

function showPersonAlt({ identitet: id, firstname: fn, lastname: ln }) {
    /**
     * Tilordning av funksjonsparametre fra Object gitt som parameter,
     * og der parameternavn ikke er likt med nøkkler i objekt.
     */

    console.log(`id: ${id}`);
    console.log(`fn: ${fn}`);
    console.log(`ln: ${ln}`);
}

function demo21() {
    const person = {
        identitet: 12,
        firstname: 'Ole',
        lastname: 'Olsen'
    };

    showPersonAlt(person);
}

function getFirstLastDigits(number) {
    /**
     * Metoden returnerer array med to heltall, [first,last], som er første og
     * siste siffer i input i ti-tall systemet.
     *
     * Siffrene finnes med tallmanipulasjon.
     */

    number = Math.abs(number);
    const last = number % 10;

    let first = 0;
    while (number !== 0) {
        first = number;
        number = Math.trunc(number / 10);
    }
    return [first, last];
}

function demo22() {
    /**
     * Tilordne variabler fra verdier fra Array gitt som returverdi fra funksjon.
     */

    const [first, last] = getFirstLastDigits(13468345);
    console.log(`First digit: ${first}`);
    console.log(`Last digit: ${last}`);
}

function getFirstLastDigitsAlt(number) {
    /**
     * Metoden returnerer array med to heltall, [first,last], som er første og
     * siste siffer i input i ti-tall systemet.

     * Siffrene finnes ved å bruke String metoder.
     */

    number = Math.abs(number);
    const numberString = number.toString();
    const first = numberString.slice(0, 1);
    const last = numberString.slice(-1);

    return [parseInt(first), parseInt(last)];
}

function demo23() {
    /**
     * Tilordne variabler fra verdier fra Array gitt som returverdi fra funksjon.
     */

    const [first, last] = getFirstLastDigitsAlt(13468345);
    console.log(`First digit: ${first}`);
    console.log(`Last digit: ${last}`);
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
            case "demo18":
                functext = summer.toString()
                functext += "\n\n"
                break
            case "demo19":
                functext = produkt.toString()
                functext += "\n\n"
                break
            case "demo20":
                functext = showPerson.toString()
                functext += "\n\n"
                break
            case "demo21":
                functext = showPersonAlt.toString()
                functext += "\n\n"
                break
            case "demo22":
                functext = getFirstLastDigits.toString()
                functext += "\n\n"
                break
            case "demo23":
                functext = getFirstLastDigitsAlt.toString()
                functext += "\n\n"
                break
            default:
                functext = ""
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

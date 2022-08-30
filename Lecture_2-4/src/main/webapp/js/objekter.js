"use strict";

function demo0() {
    const radianer = Math.asin(Math.SQRT1_2);
    const grader = radianer*180/Math.PI;

    console.log(`Vinkelen er ${radianer.toFixed(2)} radianer, eller ${grader.toFixed(2)} grader`);
}

function demo1() {
    console.log(`Grunntallet 'e' er omtrent ${Math.round(Math.E)}`);
}

function demo2() {
    const tabell = [1,5,7,-23];

    try {
        const JSONString = JSON.stringify(tabell);
        
        console.log(`typeof JSONString: ${typeof JSONString}`);

        console.log(`En tekststreng: '${JSONString}'`);
    } catch(e) {
        console.log(e);
    }
}

function demo3() {
    const JSONString = "[1,5,7,-23]";

    try {
        const tabell = JSON.parse(JSONString);

        console.log(`typeof tabell: ${typeof tabell}`);

        tabell.forEach(tall => {console.log(tall)});
    } catch(e) {
        console.log(e);
    }
}

function demo4() {
    const person = {
        id: 23,
        fornavn: "Ole",
        etternavn: "Olsen",
        telefoner: ["12345678","87654321","11223344"]
    };

    try {
        const JSONString = JSON.stringify(person);
        console.log(JSONString);
    } catch(e) {
        console.log(e);
    }
}

function demo5() {
    const JSONString = '{"id":23,"fornavn":"Ole","etternavn":"Olsen","telefoner":["12345678","87654321","11223344"]}';

    try {
        const person = JSON.parse(JSONString);

        console.log(`${person.fornavn} ${person.etternavn} har telefon:`);
        person.telefoner.forEach(telefon => {console.log(`  - ${telefon}`)});
    } catch(e) {
        console.log(e);
    }

}

function demo6() {
    const JSONString = '{"id":23,"fornavn":"Ole","etternavn":"Olsen","a": function(x){return 2*x}}';

    console.log("Denne vil feile!");
    try {
        const person = JSON.parse(JSONString); // Error, funksjon i JSONString

        console.log(`${person.fornavn} ${person.etternavn}`);
    } catch(e) {
        console.log(e);
    }
}

function demo7() {
    const JSONString = "{'id':23,'fornavn':'Ole','etternavn':'Olsen'}";

    console.log("Denne vil feile!");
    try {
        const person = JSON.parse(JSONString); // Error, gale hermetegn i JSONString

        console.log(`${person.fornavn} ${person.etternavn}`);
    } catch(e) {
        console.log(e);
    }
}

function demo8() {
    const JSONString = '{id:23,fornavn:"Ole",etternavn:"Olsen"}';

    console.log("Denne vil feile!");
    try {
        const person = JSON.parse(JSONString); // Error, ikke hemetegn rundt nøkler i JSONString

        console.log(`${person.fornavn} ${person.etternavn}`);
    } catch(e) {
        console.log(e);
    }
}

function demo9() {
    const l10nNONumber = new Intl.NumberFormat("nb-NO",{"style": "currency", "currency" : "NOK", "currencyDisplay":"name"});

    for (let i=0;i<10;++i) {
        const number = Math.random()*1000;
        console.log(`Prisen er ${l10nNONumber.format(number)}`);
    }
}

function demo10() {
    for (let i=0;i<10;++i) {
        const number = Math.random()*1000;
        const priceString = number.toLocaleString("nb-NO",{"style": "currency", "currency" : "NOK", "currencyDisplay":"name"});
        console.log(`Prisen er ${priceString}`);
    }
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

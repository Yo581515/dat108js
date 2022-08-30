"use strict";

function demo0() {
    const rootElement =  document.getElementById("demoRoot");
    rootElement.classList.toggle("emph");
    console.log(`Root elementet er et ${rootElement.tagName} element som har id '${rootElement.id}'`);
}

function demo1() {
    const rootElement =  document.getElementById("demoRoot");

    // Første tr-element med attributt 'data-userid'
    const elmRef = rootElement.querySelector('tr[data-userid]');

    elmRef.classList.toggle("emph");
    console.log(`Første tr-element med attributt 'data-userid' inne i ${rootElement.tagName} har tagg ${elmRef.tagName}`);
}

function demo2() {
    const rootElement =  document.getElementById("demoRoot");

    // Antall elementer med tagg tr
    const count = rootElement.getElementsByTagName('tr').length;
    console.log(`Antall tr-elementer inne i ${rootElement.tagName} er ${count}`);
}

function demo3() {
    const rootElement =  document.getElementById("demoRoot");

    // Andre tr element
    const elmRef = rootElement.getElementsByTagName('tr')[1];
    elmRef.classList.toggle("emph");
    console.log(`Andre tr-element inne i ${rootElement.tagName} har tagg ${elmRef.tagName}`);
}

function demo4() {
    const rootElement =  document.getElementById("demoRoot");

    // Antall elementer med tagg, uansett tagg
    const count = rootElement.getElementsByTagName('*').length;
    console.log(`Antall elementer med tagg, uansett tagg inne i ${rootElement.tagName} er ${count}`);
}

function demo5() {
    const rootElement =  document.getElementById("demoRoot");

    // Alle taggene
    Array.from(rootElement.getElementsByTagName('*')).forEach(
        (elmRef) => {console.log(`Fant element med tagg ${elmRef.tagName} inne i ${rootElement.tagName}`)}
    );
}

function demo6() {
    const rootElement =  document.getElementById("demoRoot");

    // Fjerde tabellcelle i andre rekke
    const elmRef = rootElement.getElementsByTagName('tr')[1].getElementsByTagName('td')[3];

    elmRef.classList.toggle("emph");
    console.log(`Fjerde tabellcelle i andre rekke inneholder '${elmRef.innerText.trim()}'`);
}

function demo7() {
    const rootElement =  document.getElementById("demoRoot");

    // Antall elementer med class attributtet "firstname"
    const count = rootElement.getElementsByClassName("firstname").length;
    console.log(`Antall elementer med class attributt "firstname" inne i ${rootElement.tagName} er ${count}`);
}

function demo8() {
    const rootElement =  document.getElementById("demoRoot");

    // Første element med class attributtet "firstname"
    const elmRef = rootElement.getElementsByClassName("firstname")[0];

    elmRef.classList.toggle("emph");
    console.log(`Første element med class attributt 'firstname' inne i ${rootElement.tagName} har tagg ${elmRef.tagName}`);
}

function demo9() {
    const rootElement =  document.getElementById("demoRoot");

    // Alle elementer med class attributtet "lastname"
    Array.from(rootElement.getElementsByClassName("lastname")).forEach(
        (elmRef) => {
            elmRef.classList.toggle("emph");
            console.log(`Fant element med ${elmRef.tagName} med class attributt 'lastname' inne i ${rootElement.tagName}`);
        }
    );
}

function demo10() {
    const rootElement =  document.getElementById("demoRoot");

    // Fjerner class attributt "emph" fra alle elementer
    const liste = rootElement.getElementsByClassName("emph");
    while (liste.length > 0) {
        console.log(`Fjerner class 'emph' på element med tagg ${liste[0].tagName}`);
        liste[0].classList.remove("emph");
    }
}

function demo11() {
    const rootElement =  document.getElementById("demoRoot");

    // Første tabellrekke med attributt 'data-userid'
    const elmRef = rootElement.querySelector('tr[data-userid]');

    elmRef.classList.toggle("emph");
    console.log(`Første tabellrekke med attributt 'data-userid' inneholder '${elmRef.innerText.trim()}'`);
}

function demo12() {
    const rootElement =  document.getElementById("demoRoot");

    // Første tabellrekke med attributt 'data-userid="5"'
    const elmRef = rootElement.querySelector('tr[data-userid="5"]');

    elmRef.classList.toggle("emph");
    console.log(`Første tabellrekke med attributt 'data-userid="5"' inneholder '${elmRef.innerText.trim()}'`);
}

function demo13() {
    const rootElement =  document.getElementById("demoRoot");

    // Siste tabellcelle i rekke med attributt data-userid
    const elmRef = rootElement.querySelector('tr[data-userid] > td:last-child');

    elmRef.classList.toggle("emph");
    console.log(`Siste tabellcelle i rekke med attributt 'data-userid' inneholder '${elmRef.innerText.trim()}'`);
}

function demo14() {
    const rootElement =  document.getElementById("demoRoot");

    // Alle tabellceller inne i tbody som er første barn:
    rootElement.querySelectorAll('tbody td:first-child').forEach(
        (elmRef) => {
            elmRef.classList.toggle("emph");
            console.log(`Fant tr-element som inneholder '${elmRef.innerText.trim()}'`);
        }
    );
}

function demo15() {
    const rootElement =  document.getElementById("demoRoot");

    // Finne alle andre td som er barn av tabellrekke med attributt 'data-userid'
    rootElement.querySelectorAll('tr[data-userid]>td:first-child + td').forEach(
        (elmRef) => {
            elmRef.classList.toggle("emph");
            console.log(`Fant td-element som inneholder '${elmRef.innerText.trim()}'`);
        }
    );
}

function demo16() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");

    // Tabellen sin thead
    const elmRef = tableRef.tHead;
    elmRef.classList.toggle("emph");
    console.log(`Tabellen sin thead inneholder '${elmRef.innerText.trim()}'`);
}

function demo17() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");

    // Tabellen sine tbody
    console.log(`Tabellen har ${tableRef.tBodies.length} tbody`);
    Array.from(tableRef.tBodies).forEach(
        (elmRef,i) => {
            elmRef.classList.toggle("emph");
            console.log(`Tabellen har tbody med index ${i} har ${elmRef.rows.length} rekker`);
        }
    );
}

function demo18() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");

    // Tabellen sine rekker
    console.log(`Tabellen har ${tableRef.rows.length} rekker`);
    Array.from(tableRef.rows).forEach(
        (elmRef,i) => {
            elmRef.classList.toggle("emph");
            console.log(`Tabellrekke, index ${i} inneholder '${elmRef.innerText.trim()}'`);
        }
    );
}

function demo19() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");
    const tbodyRef = tableRef.tBodies[0];

    // Tabellen sin første tbody sine rekker
    console.log(`tbody har ${tbodyRef.rows.length} rekker`);
    Array.from(tbodyRef.rows).forEach(
        (elmRef,i) => {
            elmRef.classList.toggle("emph");
            console.log(`Tabellrekke, index ${i} i tbody inneholder '${elmRef.innerText.trim()}'`);
        }
    );
}

function demo20() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");
    const tbodyRef = tableRef.tBodies[0];

    // Første tabellrekke i tbody
    const elmRef = tbodyRef.rows[0];
    elmRef.classList.toggle("emph");
    console.log(`Første tabellrekke i tbody har ${elmRef.cells.length} tabellceller`);
}

function demo21() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");
    const tbodyRef = tableRef.tBodies[0];

    // Tabellceller i første tabellrekke i tbody
    Array.from(tbodyRef.rows[0].cells).forEach(
        (elmRef,i) => {
            elmRef.classList.toggle("emph");
            console.log(`Tabellcelle, index ${i} inneholder '${elmRef.innerText.trim()}'`);
        }
    );
}

function demo22() {
    const rootElement =  document.getElementById("demoRoot");
    const tableRef = rootElement.querySelector("[data-studentlist]");
    const tbodyRef = tableRef.tBodies[0];

    // Fjerde tabellcelle i første rekke i tobyd
    const elmRef = tbodyRef.rows[0].cells[3];

    elmRef.classList.toggle("emph");
    console.log(`Fjerde tabellcelle i første rekke i tbody inneholder '${elmRef.innerText.trim()}'`);
}

function demo23() {
    const rootElement =  document.getElementById("demoRoot");
    const formElement = rootElement.querySelector('form[action = "behandledata"]');

    // Alle children til form-element
    Array.from(formElement.children).forEach(
        (elmRef,i) => {
            elmRef.classList.toggle("emph");
            console.log(`children, index ${i} har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
        }
    );
}

function demo24() {
    const rootElement =  document.getElementById("demoRoot");
    const formElement = rootElement.querySelector('form[action = "behandledata"]');

    // firstElementChild til form-element
    const elmRef = formElement.firstElementChild;
    elmRef.classList.toggle("emph");
    console.log(`Form-element sitt 'firstElementChild' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
}

function demo25() {
    const rootElement =  document.getElementById("demoRoot");
    const formElement = rootElement.querySelector('form[action = "behandledata"]');

    // lastElementChild til form-element
    const elmRef = formElement.lastElementChild;
    elmRef.classList.toggle("emph");
    console.log(`Form-element sitt 'lastElementChild' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
}

function demo26() {
    const rootElement =  document.getElementById("demoRoot");
    const resetButton = rootElement.querySelector('button[type = "reset"]');

    // previousElementSibling til reset-knapp
    const elmRef = resetButton.previousElementSibling;
    elmRef.classList.toggle("emph");
    console.log(`Reset-button sin 'previousElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
}

function demo27() {
    const rootElement =  document.getElementById("demoRoot");
    const inputElement = rootElement.querySelector('input[type = "text"]');

    // previousElementSibling til form-skjema sitt text input element
    const elmRef = inputElement.previousElementSibling;
    if (elmRef === null) {
        console.log("form-skjema sitt text input element har ingen 'previousElementSibling'");
    } else {
        elmRef.classList.toggle("emph");
        console.log(`Text input-element sin 'previousElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
    }
}

function demo28() {
    const rootElement =  document.getElementById("demoRoot");
    const inputElement = rootElement.querySelector('input[type = "text"]');

    // nextElementSibling til text input-element
    const elmRef = inputElement.nextElementSibling;
    elmRef.classList.toggle("emph");
    console.log(`Text input-element sin  sin 'nextElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
}

function demo29() {
    const rootElement =  document.getElementById("demoRoot");
    const resetButton = rootElement.querySelector('button[type = "reset"]');

    // nextElementSibling til form-skjema sin reset-knapp
    const elmRef = resetButton.nextElementSibling;
    if (elmRef === null) {
        console.log("form-skjema sin reset-knapp har ingen 'nextElementSibling'");
    } else {
        elmRef.classList.toggle("emph");
        console.log(`Reset-knapp sin 'nextElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`);
    }
}

function demo30() { // parent
    const rootElement =  document.getElementById("demoRoot");
    const resetButton = rootElement.querySelector('button[type = "reset"]');

    // reset-knapp sitt forelder element
    const elmRef = resetButton.parentNode;
    elmRef.classList.toggle("emph");
    console.log(`Reset-knapp sitt forelder element har tagg ${elmRef.tagName}`);
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

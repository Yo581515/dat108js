"use strict";

/**
 * Klasse med med metodene som demonstreres, og som viser metoden
 * på websiden.
 */
class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} demoHandler - Container-element for HTML BUTTON elementer
     * @param {HTMLElement} rootDemo - Container-element for demonstrasjoner
     */
    constructor (demoHandler,rootDemo) {
        /** @private {HTMLElement} */ this.rootElement = rootDemo
        /** @private {HTMLElement} */ this.demoHandler = demoHandler
        this.viewcode = this.viewcode.bind(this)

       /**
        * Legger til lytter for hendelse 'click' på alle HTML BUTTON elementer.
        * Ved 'click' på en HTML BUTTON kjøres flere metoder:
        * 1. console.clear som tømmer konsollet
        * 3. En metode gitt av elementet sitt attributt 'data-demo'.
        * 2. Klassen sin metode 'viewcode' som viser kilden for metoden i punktet over.
        * Verdien til 'data-demo' er 'demo0' for første BUTTON, 'demo1' for neste osv.
        */
        const buttons =  this.demoHandler.getElementsByTagName("button")
        Array(...buttons).forEach(
            (button) => {
                const methodName = button.getAttribute("data-demo")
                const method = eval(`this.${methodName}`)
                if (typeof method !== "function") return
                button.addEventListener('click',console.clear,true)
                button.addEventListener('click',(event) => {this.viewcode(event,method)},true)
                button.addEventListener("click",method.bind(this),false)
            }
        )
    }

    /**
     * Metode viser koden på webside for metoden som kjøres ved klikk på button
     * @private
     * @listens Button:click
     * @param {Event} event - Event objektet for klikk på demo-knapp
     * @param {Function} method - Metode som koden skal vises for
     */
   viewcode(event,method) {
        const viewElm = this.demoHandler.querySelector("pre[data-viewelm]")
        const functext = method.toString()
        viewElm.textContent = functext
        viewElm.classList.add("demo")
    }

    /**
     * Demonstrasjoner, alle demoX
     * @private
     * @listens Button:click
     */
    demo0() {
        this.rootElement.classList.toggle("emph")
        console.log(`Root elementet er et ${this.rootElement.tagName} element som har id '${this.rootElement.id}'`)
    }

    demo1() {
        // Første tr-element med attributt 'data-userid'
        const elmRef = this.rootElement.querySelector('tr[data-userid]')

        elmRef.classList.toggle("emph")
        console.log(`Første tr-element med attributt 'data-userid' inne i ${this.rootElement.tagName} har tagg ${elmRef.tagName}`)
    }

    demo2() {
        // Antall elementer med tagg tr
        const count = this.rootElement.getElementsByTagName('tr').length
        console.log(`Antall tr-elementer inne i ${this.rootElement.tagName} er ${count}`)
    }

    demo3() {
        // Andre tr element
        const elmRef = this.rootElement.getElementsByTagName('tr')[1]
        elmRef.classList.toggle("emph")
        console.log(`Andre tr-element inne i ${this.rootElement.tagName} har tagg ${elmRef.tagName}`)
    }

    demo4() {
        // Antall elementer med tagg, uansett tagg
        const count = this.rootElement.getElementsByTagName('*').length
        console.log(`Antall elementer med tagg, uansett tagg inne i ${this.rootElement.tagName} er ${count}`)
    }

    demo5() {
        // Alle taggene
        Array(...this.rootElement.getElementsByTagName('*')).forEach(
            (elmRef) => {console.log(`Fant element med tagg ${elmRef.tagName} inne i ${this.rootElement.tagName}`)}
        )
    }

    demo6() {
        // Fjerde tabellcelle i andre rekke
        const elmRef = this.rootElement.getElementsByTagName('tr')[1].getElementsByTagName('td')[3]

        elmRef.classList.toggle("emph")
        console.log(`Fjerde tabellcelle i andre rekke inneholder '${elmRef.innerText.trim()}'`)
    }

    demo7() {
        // Antall elementer med class attributtet "firstname"
        const count = this.rootElement.getElementsByClassName("firstname").length
        console.log(`Antall elementer med class attributt "firstname" inne i ${this.rootElement.tagName} er ${count}`)
    }

    demo8() {
        // Første element med class attributtet "firstname"
        const elmRef = this.rootElement.getElementsByClassName("firstname")[0]

        elmRef.classList.toggle("emph")
        console.log(`Første element med class attributt 'firstname' inne i ${this.rootElement.tagName} har tagg ${elmRef.tagName}`)
    }

    demo9() {
        // Alle elementer med class attributtet "lastname"
        Array(...this.rootElement.getElementsByClassName("lastname")).forEach(
            (elmRef) => {
                elmRef.classList.toggle("emph")
                console.log(`Fant element med ${elmRef.tagName} med class attributt 'lastname' inne i ${this.rootElement.tagName}`)
            }
        )
    }

    demo10() {
        // Fjerner class attributt "emph" fra alle elementer
        const liste = this.rootElement.getElementsByClassName("emph")
        while (liste.length > 0) {
            console.log(`Fjerner class 'emph' på element med tagg ${liste[0].tagName}`)
            liste[0].classList.remove("emph")
        }
    }

    demo11() {
        // Første tabellrekke med attributt 'data-userid'
        const elmRef = this.rootElement.querySelector('tr[data-userid]')

        elmRef.classList.toggle("emph")
        console.log(`Første tabellrekke med attributt 'data-userid' inneholder '${elmRef.innerText.trim()}'`)
    }

    demo12() {
        // Første tabellrekke med attributt 'data-userid="5"'
        const elmRef = this.rootElement.querySelector('tr[data-userid="5"]')

        elmRef.classList.toggle("emph")
        console.log(`Første tabellrekke med attributt 'data-userid="5"' inneholder '${elmRef.innerText.trim()}'`)
    }

    demo13() {
        // Siste tabellcelle i rekke med attributt data-userid
        const elmRef = this.rootElement.querySelector('tr[data-userid] > td:last-child')

        elmRef.classList.toggle("emph")
        console.log(`Siste tabellcelle i rekke med attributt 'data-userid' inneholder '${elmRef.innerText.trim()}'`)
    }

    demo14() {
        // Alle tabellceller inne i tbody som er første barn:
        this.rootElement.querySelectorAll('tbody td:first-child').forEach(
            (elmRef) => {
                elmRef.classList.toggle("emph")
                console.log(`Fant tr-element som inneholder '${elmRef.innerText.trim()}'`)
            }
        )
    }

    demo15() {
        // Finne alle andre td som er barn av tabellrekke med attributt 'data-userid'
        this.rootElement.querySelectorAll('tr[data-userid]>td:first-child + td').forEach(
            (elmRef) => {
                elmRef.classList.toggle("emph")
                console.log(`Fant td-element som inneholder '${elmRef.innerText.trim()}'`)
            }
        )
    }

    demo16() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")

        // Tabellen sin thead
        const elmRef = tableRef.tHead
        elmRef.classList.toggle("emph")
        console.log(`Tabellen sin thead inneholder '${elmRef.innerText.trim()}'`)
    }

    demo17() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")

        // Tabellen sine tbody
        console.log(`Tabellen har ${tableRef.tBodies.length} tbody`)
        Array(...tableRef.tBodies).forEach(
            (elmRef,i) => {
                elmRef.classList.toggle("emph")
                console.log(`Tabellen har tbody med index ${i} har ${elmRef.rows.length} rekker`)
            }
        )
    }

    demo18() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")

        // Tabellen sine rekker
        console.log(`Tabellen har ${tableRef.rows.length} rekker`)
        Array(...tableRef.rows).forEach(
            (elmRef,i) => {
                elmRef.classList.toggle("emph")
                console.log(`Tabellrekke, index ${i} inneholder '${elmRef.innerText.trim()}'`)
            }
        )
    }

    demo19() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")
        const tbodyRef = tableRef.tBodies[0]

        // Tabellen sin første tbody sine rekker
        console.log(`tbody har ${tbodyRef.rows.length} rekker`)
        Array(...tbodyRef.rows).forEach(
            (elmRef,i) => {
                elmRef.classList.toggle("emph")
                console.log(`Tabellrekke, index ${i} i tbody inneholder '${elmRef.innerText.trim()}'`)
            }
        )
    }

    demo20() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")
        const tbodyRef = tableRef.tBodies[0]

        // Første tabellrekke i tbody
        const elmRef = tbodyRef.rows[0]
        elmRef.classList.toggle("emph")
        console.log(`Første tabellrekke i tbody har ${elmRef.cells.length} tabellceller`)
    }

    demo21() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")
        const tbodyRef = tableRef.tBodies[0]

        // Tabellceller i første tabellrekke i tbody
        Array(...tbodyRef.rows[0].cells).forEach(
            (elmRef,i) => {
                elmRef.classList.toggle("emph")
                console.log(`Tabellcelle, index ${i} inneholder '${elmRef.innerText.trim()}'`)
            }
        )
    }

    demo22() {
        const tableRef = this.rootElement.querySelector("[data-studentlist]")
        const tbodyRef = tableRef.tBodies[0]

        // Fjerde tabellcelle i første rekke i tobyd
        const elmRef = tbodyRef.rows[0].cells[3]

        elmRef.classList.toggle("emph")
        console.log(`Fjerde tabellcelle i første rekke i tbody inneholder '${elmRef.innerText.trim()}'`)
    }

    demo23() {
        const formElement = this.rootElement.querySelector('form[action = "behandledata"]')

        // Alle children til form-element
        Array(...formElement.children).forEach(
            (elmRef,i) => {
                elmRef.classList.toggle("emph")
                console.log(`children, index ${i} har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
            }
        )
    }

    demo24() {
        const formElement = this.rootElement.querySelector('form[action = "behandledata"]')

        // firstElementChild til form-element
        const elmRef = formElement.firstElementChild
        elmRef.classList.toggle("emph")
        console.log(`Form-element sitt 'firstElementChild' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
    }

    demo25() {
        const formElement = this.rootElement.querySelector('form[action = "behandledata"]')

        // lastElementChild til form-element
        const elmRef = formElement.lastElementChild
        elmRef.classList.toggle("emph")
        console.log(`Form-element sitt 'lastElementChild' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
    }

    demo26() {
        const resetButton = this.rootElement.querySelector('button[type = "reset"]')

        // previousElementSibling til reset-knapp
        const elmRef = resetButton.previousElementSibling
        elmRef.classList.toggle("emph")
        console.log(`Reset-button sin 'previousElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
    }

    demo27() {
        const inputElement = this.rootElement.querySelector('input[type = "text"]')

        // previousElementSibling til form-skjema sitt text input element
        const elmRef = inputElement.previousElementSibling
        if (elmRef === null) {
            console.log("form-skjema sitt text input element har ingen 'previousElementSibling'")
        } else {
            elmRef.classList.toggle("emph")
            console.log(`Text input-element sin 'previousElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
        }
    }

    demo28() {
        const inputElement = this.rootElement.querySelector('input[type = "text"]')

        // nextElementSibling til text input-element
        const elmRef = inputElement.nextElementSibling
        elmRef.classList.toggle("emph")
        console.log(`Text input-element sin  sin 'nextElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
    }

    demo29() {
        const resetButton = this.rootElement.querySelector('button[type = "reset"]')

        // nextElementSibling til form-skjema sin reset-knapp
        const elmRef = resetButton.nextElementSibling
        if (elmRef === null) {
            console.log("form-skjema sin reset-knapp har ingen 'nextElementSibling'")
        } else {
            elmRef.classList.toggle("emph")
            console.log(`Reset-knapp sin 'nextElementSibling' har tagg ${elmRef.tagName} og innhold '${elmRef.innerText.trim()}'`)
        }
    }

    demo30() { // parent
        const resetButton = this.rootElement.querySelector('button[type = "reset"]')

        // reset-knapp sitt forelder element
        const elmRef = resetButton.parentNode
        elmRef.classList.toggle("emph")
        console.log(`Reset-knapp sitt forelder element har tagg ${elmRef.tagName}`)
    }
}

function init() {
    const rootDemoHandler =  document.getElementById("demoHandler")
    const rootDemo =  document.getElementById("demoRoot")
    new Demo(rootDemoHandler,rootDemo)
}
document.addEventListener('DOMContentLoaded',init)

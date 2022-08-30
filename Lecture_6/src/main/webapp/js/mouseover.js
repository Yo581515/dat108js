"use strict";

class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor (rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement
        this.showMessage = this.showMessage.bind(this);
        this.hideMessage = this.hideMessage.bind(this);

        /**
         * Oppretter, og fyller en Map med meldinger som skal vises når mus beveges inn over et INPUT element.
         */
        this.messages = new Map();
        this.initMessages();

        /**
         * Skjuler meldingsfeltet som skal vise info når musepeker beveges inn over et INPUT element.
         */
        this.messageElm = this.root.querySelector('div[data-message]');
        this.messageElm.classList.add("hidden");

        /**
         * Legger til lytter for hendelsen 'mouseover' og 'mouseout' på  INPUT element for fornavn.
         * Ved 'mouseover' vises melding om fornavn.
         * Ved 'mouseout' fjernes melding og meldingsfeltet skjules.
         */
        this.fnElm = this.root.querySelector('input[data-firstname]');
        this.fnElm.addEventListener("mouseover",() => {this.showMessage(this.messages.get('firstname'))});
        this.fnElm.addEventListener("mouseout",this.hideMessage);

        /**
         * Legger til lytter for hendelsen 'mouseover' og 'mouseout' på  INPUT element for etternavn.
         * Ved 'mouseover' vises melding om etternavn.
         * Ved 'mouseout' fjernes melding og meldingsfeltet skjules.
         */
        this.lnElm = this.root.querySelector('input[data-lastname]');
        this.lnElm.addEventListener("mouseover",() => {this.showMessage(this.messages.get('lastname'))});
        this.lnElm.addEventListener("mouseout",this.hideMessage);
    }

    /**
     * Metode som fyller Map med melding som skal vises når mus beveges inn over et INPUT element for fornavn og etternavn.
     * @private
     */
    initMessages() {
        this.messages.set('firstname', 'Fyll inn fornavn. Fornavn må begynne på stor bokstav og etterfølges av små bokstaver.');
        this.messages.set('lastname', 'Fyll inn etternavn. Etternavn må begynne på stor bokstav og etterfølges av små bokstaver.');
    }

    /**
     * Metode som viser oppretter melding i meldingsfeltet og viser meldingsfeltet.
     * @private
     * @param {String} message - Melding som skal vises
     * @listens HTMLInputElement:mouseover
     */
    showMessage(message) {
        this.messageElm.classList.remove("hidden");
        this.messageElm.insertAdjacentHTML('beforeend', "<p></p>");
        this.messageElm.lastElementChild.textContent = message;
    }

    /**
     * Metode som viser sletter melding og skjuler meldingsfeltet
     * @private
     * @listens HTMLInputElement:mouseover
     */
    hideMessage() {
        this.messageElm.classList.add("hidden");
        this.messageElm.textContent = null;
    }
}

function init() {
    const rootElm =  document.getElementById("root");
    new Demo(rootElm);
}
document.addEventListener('DOMContentLoaded',init);


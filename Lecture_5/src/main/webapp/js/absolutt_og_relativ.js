"use strict";

/**
 * Klasse for å håndtere HTML-element.
 * Data i input element blir vist på websiden etter klikk på knapp.
 * på websiden.
 */
class DemoGUI {
    _root;
    _inputElement;
    _outputElement;
    
     /**
     * Konstruktøren lager referanser til HTML-elementer på websiden
     * og legger lytter på button
     * @param {HTMLElement} root - HTML container-elementet for DemoGUI
     */
    constructor(root) {
        this._root = root;
        this._showData = this._showData.bind(this);

        this._inputElement = this._root.querySelector("input[data-value]"); // Relativ
        this._outputElement = this._root.querySelector("span[data-show]"); // Relativ
        const bt = this._root.querySelector("button[data-button]"); // Relativ

        bt.addEventListener("click",this._showData);
    }

    /**
     * Metode viser data fra input-elmentet på websiden.
     * @private
     * @listens this._root.querySelector("button[data-button]"):click
     */
    _showData () {
        this._outputElement.textContent = this._inputElement.value;
    }

}

function initC1() {
    const rootElement = document.getElementById("c1"); // Absolutt
    new DemoGUI(rootElement);
}
document.addEventListener("DOMContentLoaded",initC1);

function initC2() {
    const rootElement = document.getElementById("c2"); // Absolutt
    new DemoGUI(rootElement);
}
document.addEventListener("DOMContentLoaded",initC2);


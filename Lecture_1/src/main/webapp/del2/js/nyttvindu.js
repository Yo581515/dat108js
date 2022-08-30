"use strict";

/**
 * Klasse for å opprette og arbeide med et nytt netteleservindu.
 */
class Display {
    /**
     * Konstruktøren oppretter et nytt nettleservindue.
     */
    constructor() {
        /** @private {Window} */ this.windowRef = window.open('vindu.html', 'nyttVindu',
        `height=200,width=300,screenX=30,screenY=50 \
         ,resizable,scrollbars,menubar,status,titlebar,toolbar`);
    }

    /**
     * Metode som toggler "className" på nytt vindu, for å endre bakgrunnsfarge.
     * @private
     */
    changeBackground() {
        this.windowRef.document.body.classList.toggle("newwindow_emph");
    }

    /**
     * Metoden endrer størrelse på nytt vindu.
     * @private
     * @param {number} x - Ny størrelse i piksler i X-retning
     * @param {number} y - Ny størrelse i piksler i Y-retning
     */
    resizeTo(x, y) {
        this.windowRef.resizeTo(x, y);
    }

    /**
     * Metoden flytter det nye vindu på datamaskin-skjermen.
     * @private
     * @param {number} x - Antall piksler forflytning i X-retning
     * @param {number} y - Antall piksler forflytning i Y-retning
     */
    moveBy(x, y) {
        this.windowRef.moveBy(x, y);
    }
}

/**
 * Klasse for å knytte buttons på websiden til metoder for å arbeide med
 * et nytt vindu
 */
class WindowController {
    /**
     * Binder metoder til klikk-hendelse på HTML button elementer.
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor(rootElement) {
        this.newWindow = this.newWindow.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.resizeTo = this.resizeTo.bind(this);
        this.moveBy = this.moveBy.bind(this);

        let aWindow = null;
        const newBt = rootElement.querySelector("button[data-action='newwindow']");
        newBt.addEventListener('click', this.newWindow);

        const chbgBt = rootElement.querySelector("button[data-action='chbg']");
        chbgBt.addEventListener('click', this.changeBackground);

        const resizeBt = rootElement.querySelector("button[data-action='resizebg']");
        resizeBt.addEventListener('click', () => { this.resizeTo(1000, 700) });

        const moveBt = rootElement.querySelector("button[data-action='move']");
        moveBt.addEventListener('click', () => { this.moveBy(50, 50) });
    }

    /**
     * Metode som oppretter et nytt vindu
     * @private
     * @listens Button[data-action='newwindow']:click
     */
    newWindow() {
        this.aWindow = new Display();
    }

    /**
     * Metode som endrer bakgrunnsfarge på nytt vindu
     * @private
     * @listens Button[data-action='chbg']:click
     */
    changeBackground() {
        this.aWindow.changeBackground();
    }

    /**
     * Metode som endrer størrelse på nytt vindu.
     * @private
     * @listens Button[data-action='resizebg']:click
     * @param {number} x - Ny størrelse i piksler i X-retning
     * @param {number} y - Ny størrelse i piksler i Y-retning
     */
    resizeTo(x, y) {
        this.aWindow.resizeTo(x, y);
    }

    /**
     * Metode som flytter nytt vindu på skjermen.
     * @private
     * @listens Button[data-action='move']:click
     * @param {number} x - Antall piksler forflytning i X-retning
     * @param {number} y - Antall piksler forflytning i Y-retning
     */
    moveBy(x, y) {
        this.aWindow.moveBy(x, y);
    }
}

function init() {
    const rootElement = document.getElementById("root");
    new WindowController(rootElement);
}
document.addEventListener('DOMContentLoaded', init);

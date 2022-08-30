"use strict";

/**
 * Klasse med demonstrasjon
 */
class PageController {
    constructor() {
        this.removeElement = this.removeElement.bind(this);
        document.body.addEventListener('click',this.removeElement);
    }

    /**
     * Button click event
     *
     * @event ClickEvent
     */

    /**
     * Metode fjerner element som blir kliket på
     * @private
     * @listens Button:click
     * @param {ClickEvent} event - ClickEvent objektet for klikk på element
     */
    removeElement(event) {
        const element = event.target;
        const parent = element.parentNode;
        parent.removeChild(element);
    }
}


function init () {
    new PageController();
}
document.addEventListener('DOMContentLoaded',init);

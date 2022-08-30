"use strict";

class Demo {
    constructor(rootElement) {
        console.log(`A: this har verdien ${this}`);

        rootElement.querySelector("button[type='button']").addEventListener("click",this.showThisB);

        this.showThisC = this.showThisC.bind(this);
        rootElement.querySelector("button[type='button']").addEventListener("click",this.showThisC);
    }

    showThisB () {
        console.log(`B: this har verdien ${this}`);
    }

    showThisC () {
        console.log(`C: this har verdien ${this}`);
    }
}

function init() {
    const rootElement = document.getElementById("root");
    new Demo(rootElement);
}

document.addEventListener('DOMContentLoaded',init);

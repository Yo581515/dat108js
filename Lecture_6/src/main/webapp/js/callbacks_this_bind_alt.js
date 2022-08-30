"use strict";

class Demo {
    constructor(rootElement) {
        this.showThis('A');
        
        rootElement.querySelector("button[type='button']").addEventListener("click",() => {this.showThis('B')});

        this.showThis = this.showThis.bind(this);
        rootElement.querySelector("button[type='button']").addEventListener("click",() => {this.showThis('C')});
   }

    showThis (param) {
        console.log(`${param}: this har verdien ${this}`);
    }
}

function init() {
    const rootElement = document.getElementById("root");
    new Demo(rootElement);
}

document.addEventListener('DOMContentLoaded',init);

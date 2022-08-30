"use strict";

class Demo {
    /**
     * Initialiserer Demo
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor (rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement;
        this.run = this.run.bind(this);

        const btElm = this.root.getElementsByTagName("button")[0];
        btElm.addEventListener("click",console.clear);

        const i1Elm = this.root.querySelector("input[name='i1']");
        i1Elm.addEventListener("input",this.run);

        const c1Elm = this.root.querySelector("input[name='c1']");
        c1Elm.addEventListener("change",this.run);

        const i2ElmA = this.root.querySelector("input[name='i2'][value='A']");
        const i2ElmB = this.root.querySelector("input[name='i2'][value='B']");
        i2ElmA.addEventListener("input",this.run);
        i2ElmB.addEventListener("input",this.run);

        const c2ElmA = this.root.querySelector("input[name='c2'][value='A']");
        const c2ElmB = this.root.querySelector("input[name='c2'][value='B']");
        c2ElmA.addEventListener("change",this.run);
        c2ElmB.addEventListener("change",this.run);

        const i3Elm = this.root.querySelector("select[name='i3']");
        i3Elm.addEventListener("input",this.run);

        const c3Elm = this.root.querySelector("select[name='c3']");
        c3Elm.addEventListener("change",this.run);

        const i4Elm = this.root.querySelector("input[name='i4']");
        i4Elm.addEventListener("input",this.run);

        const c4Elm = this.root.querySelector("input[name='c4']");
        c4Elm.addEventListener("change",this.run);

        const b4Elm = this.root.querySelector("input[name='b4']");
        b4Elm.addEventListener("blur",this.run);
    }

    /**
     * Metode som logger info om hendelsen i nettleser-konsollet.
     * @private
     * @param {Event} event
     * @listens HTMLElement:input|change|blur
     */
    run(event) {
        console.log(`Hendelse '${event.type}' ved tid ${event.timeStamp}: '${event.target.value}'`);
    }
}

function init() {
    const rootElm =  document.getElementById("root");
    new Demo(rootElm);
}
document.addEventListener('DOMContentLoaded',init);


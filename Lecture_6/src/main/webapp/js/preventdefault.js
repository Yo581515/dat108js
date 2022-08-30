"use strict";


class AnchorManager {
    constructor() {
        this.manageClick = this.manageClick.bind(this);

        document.querySelectorAll("a").forEach(this.manageAnchor,this);
    }

    manageAnchor(aRef) {
        aRef.addEventListener("click", this.manageClick);
    }

    manageClick(event) {
        console.log(`Du klikket på lenken til ${event.target.href}`);
        event.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', () => {new AnchorManager});


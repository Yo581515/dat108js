"use strict";

class Person {
    /**
     * Initialiserer Person
     * @param {String} firstname - Personen sitt fornavn
     * @param {String} lastname - Personen sitt etternavn
     */
    constructor (firstname,lastname) {
        /** @public {String} */ this.firstname = firstname;
        /** @public {String} */ this.lastname = lastname;
        /** @public {Date} */ this.borndate = new Date();
    }

    /**
     * Setter som setter fødselsdato fra person sin alder
     * @public
     * @param {Number} age - Personen sin alder
     */
    set age(age) {
        let bornyear = this.borndate.getFullYear() - age;
        this.borndate.setYear(bornyear);
    }

    /**
     * Getter som henter personen sin alder
     * @public
     * @returns {Number}
     */
    get age() {
        const now = new Date();
        return now.getFullYear() - this.borndate.getFullYear();
    }
}

const p = new Person('Ole', 'Persen');

p.age = 22;         // Kjører Person sin set metode age(22)
console.log(p.age); // Kjører Person sin get metode age()

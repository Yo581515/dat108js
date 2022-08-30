"use strict";


/**
 * Aksesserer variabel som ikke er deklarert.
 * Funksjonen feiler siden det her brukes "strict mode".
 * "use strict" på begynnelsen av koden gir "strict mode" for hele kode-snutten.
 */

number = 7;
function demo0() {
    firstname = "Ole";
    console.log(firstname);
}


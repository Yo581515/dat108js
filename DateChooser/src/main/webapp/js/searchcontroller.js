/**
 * Class for å finnde datoer som kommer på ønskede ukedager.
 * Klassen finner de 10 neste år som har dato på gitt dag.
 */
class SearchController {
    _rootElement;
    _locale = "nb-NO";

    /**
     * Initialiserer SearchController
     * @param {String} root - ID attributtet til HTML container-elementet (DIV) med HTML FORM elementet
     */
    constructor(rootElement) {
        this._rootElement = rootElement;

        /**
         * Setter korrekt 'this' for hendelseshåndterer
         */
        this._doSearch = this._doSearch.bind(this);
        this._rootElement.querySelector('button[type="button"]').addEventListener("click", this._doSearch);
    }

    /**
     * Metode søker etter datoer som kommer på ønsket dag.
     * Metoden henter ut ønskede data (dato og dag) fra HTML elementer på websiden og viser resultatet
     * i en UL-liste på websiden.
     *
     * Selve søk på datoer kunne vært lagt i en egen klasse da SearchController sin oppgave er å håndtere
     * HTML-elementene. Jeg har likevel lagt det her da forretningslogikken kun er på noen veldig få linjer.
     * @private
     */
    _doSearch() {
        const dateChooser = this._rootElement.querySelector('input[type="date"]');
        const weekdayChooser = this._rootElement.querySelector('select');

        if (!dateChooser.validity.valid) return;
        if (!weekdayChooser.validity.valid) return;

        const weekday = parseInt(weekdayChooser.value); // 0-6, der 0 er søndag, 1 er mandag, 2 er tirsdag, osv.
        const date = new Date(dateChooser.valueAsNumber);

        const datelocale = date.toLocaleDateString(this._locale, { month: 'long', day: 'numeric' });
        this._rootElement.querySelector('[data-searchdate]').textContent = datelocale;

        const dayName = weekdayChooser.querySelector(`option[value="${weekday}"]`).textContent.toLocaleLowerCase(this._locale);
        this._rootElement.querySelector('[data-chosenweekdeay]').textContent = dayName;

        const liList = this._rootElement.querySelector('[data-yearlist]').children;

        const count = liList.length;
        let i = 0;
        while (i < count) {
            let year = date.getFullYear();
            if (date.getDay() == weekday) {
                liList[i].textContent = year;
                ++i;
            }
            date.setFullYear(year + 1);
        }

        this._rootElement.querySelector('[data-result]').classList.remove("hidden");
    }
}


function init() {
    new SearchController(document.getElementById("datovelgerA"));
    new SearchController(document.getElementById("datovelgerB"));
    new SearchController(document.getElementById("datovelgerC"));
}

document.addEventListener("DOMContentLoaded", init);

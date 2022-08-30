export default class extends HTMLElement {
    #cssfile = "main.css";
    #shadow;
    #locale = "nb-NO";

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'closed' });
        this.#shadow.appendChild(this.#createLink());
        this.#shadow.appendChild(this.#createHTML());

        this.#shadow.querySelector("button").addEventListener("click", this.#doSearch.bind(this));
    }

    #createLink() {
        const link = document.createElement('link');
        const path = import.meta.url.match(/.*\//)[0];
        link.href = path.concat(this.#cssfile);
        link.rel = "stylesheet";
        link.type = "text/css";
        return link;
    }

    #createHTML() {
        const wrapper = document.createElement('div');
        /*
        const now = new Date();
        const monthZeropadded = (now.getMonth()+1).toString().padStart(2,"0");
        const dayZeropadded = (now.getDay()).toString().padStart(2,"0");
        const datestring = `${now.getFullYear()}-${monthZeropadded}-${dayZeropadded}`;
        */

        const content = `
        <h1>Datosøk</h1>
        <p>
            <label>Startdato for søk: <input type="date" required "/></label>
        </p>
        <p>
            <label>Velg ukedag:
                <select required>
                    <option value="" selected>&lt;Velg ukedag&gt;</option>
                    <option value=1>Mandag</option>
                    <option value=2>Tirsdag</option>
                    <option value=3>Onsdag</option>
                    <option value=4>Torsdag</option>
                    <option value=5>Fredag</option>
                    <option value=6>Lørdag</option>
                    <option value=0>Søndag</option>
                </select>
            </label>
        </p>
        <p>
            <button type="button">Start søk</button>
        </p>
        
        <div id="result"></div>
        `;
        wrapper.insertAdjacentHTML("beforeend", content);
        return wrapper;
    }

    #doSearch() {
        const dateChooser = this.#shadow.querySelector('input[type="date"]');
        const weekdayChooser = this.#shadow.querySelector('select');
        const result = this.#shadow.getElementById("result");
        result.textContent = "";

        if (!dateChooser.validity.valid || !weekdayChooser.validity.valid) {
            return;
        }

        const weekday = parseInt(weekdayChooser.value); // 0-6, der 0 er søndag, 1 er mandag, 2 er tirsdag, osv.
        const date = new Date(dateChooser.valueAsNumber);

        const datelocale = date.toLocaleDateString(this.#locale, { month: 'long', day: 'numeric' });
        const dayName = weekdayChooser.querySelector(`option[value="${weekday}"]`).textContent.toLocaleLowerCase(this.locale);

        result.insertAdjacentHTML("beforeend", `<p>Den ${datelocale} kommer på en ${dayName} i:</p>`);
        const countAttribute = this.getAttribute('data-count');
        let count = 10;
        if (countAttribute !== null) {
            if (/^\d+$/.test(countAttribute.trim())) {
                count = parseInt(countAttribute);
            }
        }

        const ulElement = document.createElement("ul");
        result.appendChild(ulElement);

        let i = 0;
        while (i < count) {
            let year = date.getFullYear();
            if (date.getDay() == weekday) {
                let liElement = document.createElement("li");
                ulElement.appendChild(liElement);
                liElement.textContent = year;
                ++i;
            }
            date.setFullYear(year + 1);
        }
    }
}
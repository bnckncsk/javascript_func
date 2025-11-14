/**
 * @typedef {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}} CountryWriters
 */


/**
 * renderTableBody() - táblázat törzsének kiszervezése
 * @param {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}[]} tomb 
 */
function renderTableBody(tomb) {
    const tbodyLocal = document.getElementById('tablebody'); // eredeti tbody-nkat behozzuk lokális változóként a függvényünkbe
    tbodyLocal.innerHTML = ""; // eddigi tbody lenullázása

    for (let x of tomb) { // eddigi táblázatkreáló for ciklus
        renderTableRow(tablebody, x);
    }
}


/**
 * createFormElement()
 * @param {string} form 
 * @param {string} id 
 * @param {string} labelContent 
 */
function createFormElement(form, id, labelContent) {
    const br1 = document.createElement('br'); // szükséges sortörések a kinézethez
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;

    const input = document.createElement('input');
    input.id = id;

    form.appendChild(label);
    form.appendChild(br1);
    form.appendChild(input);
    form.appendChild(br2);
    form.appendChild(br3);
}


/**
 * renderTableRow() 
 * @param {HTMLTableSectionElement} tableBody 
 * @param {CountryWriters} CountryWriters 
 */

function renderTableRow(tableBody, CountryWriters) {
    const tr2 = document.createElement('tr');
    tableBody.appendChild(tr2);

    const td1 = createCell('td', CountryWriters.nationality, tr2); // létrehozzuk a cellákat a createCell() segítségével
    
    td1.addEventListener('click', function(e){ // klikkelés esetán végrehajtja az alábbi functiont
        /**
         * @type {HTMLTableCellElement}
         */
        const a = e.target;

        const row = a.parentElement; // kattintott cella sora
        const tbody = row.parentElement; // ennek a sornak a szülője (azaz a tbody)

        const alreadyMarked = tbody.querySelector('.marked'); // ellenőriz kijelölt elemeket

        if (alreadyMarked !== null) { // ha létezik már kijelölt elem, eltávolítja róla a marked classt
            alreadyMarked.classList.remove('marked'); 
        }

        a.classList.add("marked"); // hozzáadja az a változót a marked osztályhoz
    });

    const td2 = createCell('td', CountryWriters.author, tr2);

    const td3 = createCell('td', CountryWriters.mu1, tr2);

    if (CountryWriters.mu2 != undefined && CountryWriters.author2 != undefined) {
        const tr3 = document.createElement('tr');
        tableBody.appendChild(tr3);

        const td4 = createCell('td', CountryWriters.author2, tr3);

        const td5 = createCell('td', CountryWriters.mu2, tr3);

        td1.rowSpan = 2;
    }
}


/**
 * createCell() - fuggveny a tablazatcellak letrehozasara
 * @param {'td' | 'th'} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function createCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);

    return cell;
}


/**
 * generateHeader() - fejlécgeneráló function
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function generateHeader(table, headerList) {
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tableRow = document.createElement('tr');
    thead.appendChild(tableRow);

    for (const x of headerList) {
        const th = document.createElement('th');
        tableRow.appendChild(th);
        th.innerText = x;
    }
}


/**
 * HTMLFormEventListener() - htmlform FormEventListener-jét kiszervezzük
 * @param {Event} e 
 */
function HTMLFormEventListener(e){
    e.preventDefault(); // az alapértelmezett működés meggátolása
    /**
     * @type {HTMLFormElement}
     */
    const b = e.target; // e paraméter targetjét változóba rakja

    /**
     * @type {HTMLInputElement}
     */
    const nationality = b.querySelector('#nationality'); // kiemeljük változóba az inputokat

    /**
     * @type {HTMLInputElement}
     */
    const author = b.querySelector('#author'); // itt is

    /**
     * @type {HTMLInputElement}
     */
    const mu1 = b.querySelector('#mu1'); // itt is

    /**
     * @type {HTMLInputElement}
     */
    const author2 = b.querySelector('#author2'); // itt is 

    /**
     * @type {HTMLInputElement}
     */
    const mu2 = b.querySelector('#mu2'); // itt is

    /**
     * @type {string}
     */
    const natValue = nationality.value; // a kiemelt inputok value-inak is adunk egy változót

    /**
     * @type {string}
     */
    const authValue = author.value;

    /**
     * @type {string}
     */
    const mu1Value = mu1.value;

    /**
     * @type {string}
     */
    const auth2Value = author2.value;

    /**
     * @type {string}
     */
    const mu2Value = mu2.value;

    /**
     * @type {CountryWriters}
     */
    const valami = {
        
    }
    valami.nationality = natValue; // az object értékeit megfeleltetjük a valueknak
    valami.author = authValue;
    valami.mu1 = mu1Value;

    if (auth2Value && mu2Value){
        valami.author2 = auth2Value;
        valami.mu2 = mu2Value;
    }
    
    const tbody = document.getElementById('tabletest'); // általános tbody, tr, td létrehozás

    renderTableRow(tbody, valami);
}
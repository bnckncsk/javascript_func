/**
 * @type {{author:string, era:string, love1:string, love2?:string}[]}
 */

const arr = [
    {
        author: 'Balassi Bálint',
        era: 'reformáció',
        love1: 'Losonczy Anna',
        love2: 'Dobó Krisztina'
    },
    {
        author: 'Csokonai Vitéz Mihály',
        era: 'felvilágosodás',
        love1: 'Vajda Juliána'
    },
    {
        author: 'Petőfi Sándor',
        era: 'magyar romantika',
        love1: 'Mednyánszky Berta',
        love2: 'Szendrey Júlia'
    },
    {
        author: 'Ady Endre',
        era: '20. század',
        love1: 'Léda',
        love2: 'Csinszka'
    }
]


const table = document.createElement('table');
document.body.appendChild(table);


const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

createCellElement('th', "Szerző neve", tr);
createCellElement('th', "Korszak", tr);
const th3 = createCellElement('th', "Szerelmek", tr);
th3.colSpan = 2;


const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const i of arr){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    
    createCellElement('td', i.author, tr);
    createCellElement('td', i.era, tr);
    const td3 = createCellElement('td', i.love1, tr);

    if (i.love2 == undefined){
        td3.colSpan = 2
    } else{
        createCellElement('td', i.love2 , tr);
    }
}


/**
 * createCellElement() - létrehoz táblázatcella elemet és hozzáfűzi a sorhoz
 * @param {string} cellType - th vagy td-t hozunk-e létre
 * @param {string} cellContent - cella tartalma
 * @param {HTMLTableRowElement} cellRow - melyik sorhoz csatoljuk hozzá
 * @returns {HTMLTableCellElement} - ezzel a lokális változóval tér vissza
 */

function createCellElement(cellType, cellContent, cellRow) {
    const a = document.createElement(cellType);
    a.innerText = cellContent;
    cellRow.appendChild(a);
    return a;
}

// ---------------------------------
// hf 10.18

const h2 = document.createElement('h2'); // h2 címsor létrehozása + beillesztése
h2.innerText = 'JavaScript form';
document.body.appendChild(h2);

const form = document.createElement('form'); // form létrehozása + beillesztése
document.body.appendChild(form);
form.id = 'form_js'; // form id megadása


createFormElement('text', 'Költő neve:', 'kolto_nev'); // form feltöltése
createFormElement('text', 'Korszak:', 'korszak');
createFormElement('text', 'Szerelme:', 'szerelem1');
createFormElement('text', 'Szerelme:', 'szerelem2');

const submitButton = document.createElement('button'); // Hozzáadás gomb létrehozása
submitButton.innerText = 'Hozzáadás';
form.appendChild(submitButton);


/**
 * createFormElement() - label és input mezőt létrehoz, hozzáfűzi a formhoz
 * @param {string} inputType - input típusa
 * @param {string} labelContent - a labelbe írt szöveg
 * @param {string} inputId - input id-ja
 * @returns {HTMLFormElement} - form elementtel tér vissza
 */

function createFormElement(inputType, labelContent, inputId) {
    const label = document.createElement('label'); // létrehozzuk a labelt
    label.innerText = labelContent; // labelContent = a label szövege
    label.htmlFor = inputId; // label for megegyezik az input Id-jával
    form.appendChild(label); // hozzáadjuk a fomrhoz

    const br = document.createElement('br'); // szükséges sortörések a kinézethez
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');
    form.appendChild(br);
    
    const input = document.createElement('input'); // létrehozzuk az input mezőt
    input.id = inputId; // inputId megadása
    input.name = inputId; // input name megegyezik az inputId-val (ebben az esetben)
    input.type = inputType; // input típus megadása (text)
    form.appendChild(input); // hozzáadjuk a formhoz
    form.appendChild(br2); // sortörés
    form.appendChild(br3); // sortörés
}
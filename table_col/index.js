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
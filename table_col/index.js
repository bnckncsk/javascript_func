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


const th1 = document.createElement('th');
tr.appendChild(th1);

const th2 = document.createElement('th');
tr.appendChild(th2);

const th3 = document.createElement('th');
tr.appendChild(th3);

th1.innerText = "Szerző neve";
th2.innerText = "Korszak"
th3.innerText = "Szerelmek"
th3.colSpan = 2


const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const i of arr){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td1 = document.createElement('td')
    tr.appendChild(td1)

    const td2 = document.createElement('td')
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    tr.appendChild(td3)

    td1.innerText = i.author
    td2.innerText = i.era
    td3.innerText = i.love1


    if (i.love2 == undefined){
        td3.colSpan = 2
    } else{
        const td4 = document.createElement('td')
        tr.appendChild(td4)
        td4.innerText = i.love2
    }
}


/**
 * createCellElement() - létrehoz táblázatcella elemet és hozzáfűzi a sorhoz
 * @param {string} cellType - th vagy td-t hozunk-e létre
 * @param {string} cellContent - cella tartalma
 * @param {HTMLTableRowElement} cellRow - melyik sorhoz csatoljuk hozzá
 */

function createCellElement(cellType, cellContent, cellRow) {
    const a = document.createElement(cellType);
    a.innerText = cellContent;
    cellRow.appendChild(a);
}
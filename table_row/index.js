/**
 * @type {{nationality:string, author1:string, mu1:string, author2?:string, mu2?:string}[]}
 */

const arr = [
    {
        nationality: 'Orosz',
        author: 'Gogol',
        mu1: 'A köpönyeg',
        author2: 'Csehov',
        mu2: 'A csinovnyik halála'
    },
    {
        nationality: 'Cseh',
        author: 'Franz Kafka',
        mu1: 'Az átváltozás'
    },
    {
        nationality: 'Magyar',
        author: 'Örkény István',
        mu1: 'Egyperces novellák',
        author2: 'József Attila',
        mu2: 'Klárisok'
    },
    {
        nationality: 'Svájc',
        author: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok'
    },
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);
const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const t = ["Nemzetiség", "Szerző", "Mű"];
for(let x of t) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = x;
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let x of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.innerText = x.nationality;

    const td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = x.author;

    const td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = x.mu1;

    if (x.mu2 != undefined && x.author2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const td4 = document.createElement('td');
        tr3.appendChild(td4);
        td4.innerText = x.author2;

        const td5 = document.createElement('td');
        tr3.appendChild(td5);
        td5.innerText = x.mu2;

        td1.rowSpan = 2;
    }
}
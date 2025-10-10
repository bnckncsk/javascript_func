/**
 * @type {{war:string, team1:string, team1Size:string, team2?:string, team2Size?:string}[]}
 */

const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

// fejléc + feltöltése
const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const t = ["Harc megnevezése", "Szembenálló felek", "Haderő"];

for (let x of t){
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = x;
}

// tbody + feltöltése
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let x of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.innerText = x.war;

    const td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = x.team1;

    const td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = x.team1Size;


    if (x.team2 != undefined && x.team2Size != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const td4 = document.createElement('td');
        tr3.appendChild(td4);
        td4.innerText = x.team2;

        const td5 = document.createElement('td');
        tr3.appendChild(td5);
        td5.innerText = x.team2Size;

        td1.rowSpan = 2
    }
}

// doga: 45 perc, no internet
// w3schools se használható (ai se :( )
// rowspan/colspanos tablazat
// hoverezos mizeria
// sorok/oszlopok szinezese
// tomb segitsegevel illesszuk be a tartalmat
// doga vegen az eredeti html tablazatot ki kell torolni, csak a js tablazat maradjon
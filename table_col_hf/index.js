/**
 * @type {{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]


const table = document.createElement('table'); // html elem létrehozása kizárólag a memóriában
document.body.appendChild(table); // html elem hozzáfűzése
// table.appendChild()     beillesztés syntax


const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);


const th1 = document.createElement('th');
th1.innerText = "Fizika területe";
tr.appendChild(th1);

const th2 = document.createElement('th');
tr.appendChild(th2);

const th3 = document.createElement('th');
tr.appendChild(th3);

th1.innerText = "Fizika területe";
th2.innerText = "Időszak"
th3.innerText = "Képviselők"
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

    td1.innerText = i.theme
    td2.innerText = i.time
    td3.innerText = i.scientist1


    if (i.scientist2 == undefined){
        td3.colSpan = 2
    } else{
        const td4 = document.createElement('td')
        tr.appendChild(td4)
        td4.innerText = i.scientist2
    }
}
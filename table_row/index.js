/**
 * @type {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}[]}
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
tbody.id = 'tablebody';

/**
 * renderTalbeBody() - táblázat törzsének kiszervezése
 * @param {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}[]} tomb 
 */
function renderTableBody(tomb) {
    const tbodyLocal = document.getElementById('tablebody'); // eredeti tbody-nkat behozzuk lokális változóként a függvényünkbe
    tbodyLocal.innerHTML = ""; // eddigi tbody lenullázása

    for (let x of tomb) { // eddigi táblázatkreáló for ciklus
    const tr2 = document.createElement('tr');
    tbodyLocal.appendChild(tr2);

    const td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.innerText = x.nationality;
    
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

    const td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.innerText = x.author;

    const td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.innerText = x.mu1;

    if (x.mu2 != undefined && x.author2 != undefined) {
        const tr3 = document.createElement('tr');
        tbodyLocal.appendChild(tr3);

        const td4 = document.createElement('td');
        tr3.appendChild(td4);
        td4.innerText = x.author2;

        const td5 = document.createElement('td');
        tr3.appendChild(td5);
        td5.innerText = x.mu2;

        td1.rowSpan = 2;
    }
}
}
renderTableBody(arr);

const form = document.getElementById('htmlform'); // formot eltároljuk egy változóba
form.addEventListener('submit', function(e){
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
     * @type {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}}
     */
    const valami = {
        
    }
    valami.nationality = natValue; // az object értékeit megfeleltetjük a valueknak
    valami.author = authValue;
    valami.mu1 = mu1Value;
    valami.author2 = auth2Value;
    valami.mu2 = mu2Value;

    const tbody = document.getElementById('tabletest'); // általános tbody, tr, td létrehozás

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerText = valami.nationality;

    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerText = valami.author;

    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.innerText = valami.mu1;

    if (valami.mu2 && valami.author2) {
        const tr2 = document.createElement('tr');
        tbody.appendChild(tr2);

        const td4 = document.createElement('td');
        tr2.appendChild(td4);
        td4.innerText = valami.author2;

        const td5 = document.createElement('td');
        tr2.appendChild(td5);
        td5.innerText = valami.mu2;

        td1.rowSpan = 2;
    }
})


// Form implementálása JS-ben is

/**
 * createFormElement() parameterei
 * @param {string} form 
 * @param {string} id 
 * @param {string} labelContent 
 */
function createFormElement(form, id, labelContent) {
    const br1 = document.createElement('br'); // szükséges sortörések a kinézethez (ezt máshogy nemtudom, hogy lehet-e)
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

const jsForm = document.createElement('form');
document.body.appendChild(jsForm)

createFormElement(jsForm, "nationality", "Nemzetiség:"); // feltöltjük a formunkat
createFormElement(jsForm, "author", "Szerző:");
createFormElement(jsForm, "mu1", "Mű:");
createFormElement(jsForm, "author2", "Másik szerző:");
createFormElement(jsForm, "mu2", "Mű:");

jsForm.addEventListener('submit', function(e){
    e.preventDefault(); // alapértelmezett form viselkedést meggátoljuk

    /**
     * @type {HTMLFormElement}
     */
    const form = e.target;

    /**
     * @type {HTMLInputElement}
     */
    const nationality = form.querySelector('#nationality'); // lekérjük az adatokat a html-ünkből
    /**
     * @type {HTMLInputElement}
     */
    const author = form.querySelector('#author');
    /**
     * @type {HTMLInputElement}
     */
    const mu1 = form.querySelector('#mu1'); 
    /**
     * @type {HTMLInputElement}
     */
    const author2 = form.querySelector('#author2');
    /**
     * @type {HTMLInputElement}
     */
    const mu2 = form.querySelector('#mu2');


    /**
     * @type {string}
     */
    const natValue = nationality.value; // változóadás az értékeknek
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
     * @type {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}}
     */
    const obj = { // object létrehozása
        
    }
    obj.nationality = natValue; // az object tulajdonságait megfeleltetjük az input értékekkel
    obj.author = authValue;
    obj.mu1 = mu1Value;
    obj.author2 = auth2Value;
    obj.mu2 = mu2Value;

    arr.push(obj); // ezt az objektumot hozzáadjuk az arrayhez

    renderTableBody(arr); // és meghívjuk rá  a renderTableBody-t a tömbbel
})

const submitGomb = document.createElement('button'); // submoit gombunk létrehozása
submitGomb.innerText = 'Hozzáadás';
jsForm.appendChild(submitGomb);
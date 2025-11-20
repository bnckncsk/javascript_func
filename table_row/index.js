/**
 * @typedef {{nationality:string, author:string, mu1:string, author2?:string, mu2?:string}} CountryWriters
 */

/**
 * @typedef {{id:string, label:string}} FormField
 */

/**
 * @type {CountryWriters[]}
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


/**
 * globális objektum, ami tárolja a header és form fieldek tömbjét
 * @type {{header:string[], formFields:FormField[]}}
 */
const objektum = {
    header: ["Nemzetiség", "Szerző", "Mű"],
    formFields: [
        {
            id: "nationality", 
            label: "Nemzetiség:"
        },
        {
            id: "author", 
            label: "Szerző:"
        },
        {
            id: "mu1", 
            label: "Mű:"
        },
        {
            id: "author2", 
            label: "Másik szerző:"
        },
        {
            id: "mu2", 
            label: "Mű:"
        },
    ]
}


generateTable(objektum.header, "tablebody");

renderTableBody(arr);

const form = document.getElementById('htmlform'); // formot eltároljuk egy változóba
form.addEventListener('submit', HTMLFormEventListener) // nameless fumction kicserélhető az alul definiált függvényre (erre változóként hivatkozzunk)


// Form implementálása JS-ben is

const jsForm = document.createElement('form');
document.body.appendChild(jsForm)

for (const x of objektum.formFields) { // végigiterálunk ezen a tömbön
    createFormElement(jsForm, x.id, x.label); // majd létrehozzuk az elemeket
}

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
     * @type {CountryWriters}
     */
    const obj = { // object létrehozása
        
    }
    if (!validateFields(nationality, author, mu1)){ // ha az első három mezőnkből bármelyik üres, megszakítja a folyamatot és hibaüzenetet ír
        return;
    }
    obj.nationality = natValue; // az object tulajdonságait megfeleltetjük az input értékekkel
    obj.author = authValue;
    obj.mu1 = mu1Value;

    obj.author2 = auth2Value !== "" ? auth2Value : undefined; // ha nem üres, akkor megkapja a value-t, ha üres, akkor undefined-ot kap
    obj.mu2 = mu2Value !== "" ? mu2Value : undefined;

    arr.push(obj); // ezt az objektumot hozzáadjuk az arrayhez

    renderTableBody(arr); // és meghívjuk rá  a renderTableBody-t a tömbbel
})

const submitGomb = document.createElement('button'); // submit gombunk létrehozása
submitGomb.type = 'submit'; // bebiztosítottam a gombot, hogy 100% submitoljon (eddig nem volt típus megadva)
submitGomb.innerText = 'Hozzáadás';
jsForm.appendChild(submitGomb);
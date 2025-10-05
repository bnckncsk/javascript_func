// let, const változókat használjuk

// deklarálás:
/** 
 * @type {string}
 */

const word = "segitseg"
console.log(word)

// tömb deklarálás:
/**
 * @type {string[]}
 */
const array = ["egy", "ketto"]
console.log(array[0])

// ciklusok:

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for(const a of array) {
    console.log(a)
}

for(const key in array) {
    console.log(`${key}:${array[key]}`)
}

// objektum létrehozása:

/**
 * @type {{nev:string, age:number}}
 */

const object = {
    nev : 'Bence',
    age : 17
}
console.log(object)
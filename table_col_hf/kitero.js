const szam = 6; // global scope változó

valami1();
valami2();
valami3();
const opSum = valami4(2); // paraméteres meghívás változóba

/**
 * valami1 --> ez a függvény leírása...
 * 
 * @returns {void} void --> undefined-al tér vissza
 */

function valami1() {
    console.log("helo");
}

function valami2() {
    console.log(szam); // global scope-os változót is elérjük
}

function valami3() {
    const b = 9;       // local scope változó
    console.log(b);
}

/**
 * @param {number} param1 - ez a bemeneti paraméter
 * @returns {number}
 */

function valami4(param1) {
    const va1 = 6;
    const c = param1 + va1;
    return c;
}
console.log(opSum);
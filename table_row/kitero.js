const obj = {}
let szam = 2

if(szam > 5) {
    obj.name = "valami" // tulajdonság megadása
} else{
    obj["name"] = "asd" // így is meg lehet
}
console.log(obj)
console.log(obj["name"])


let val = 6
if(val == "6") {
    console.log("igaz") // visszaadja hogy igaz
}
if(val === "6") {
    console.log("igaz") // nem adja vissza a === miatt
}


if (obj.age == undefined) {
    console.log("igaz") // igazat ad vissza (típus: undefined)
}
if (obj.age == null) {
    console.log("igaz") // igazat ad vissza (típus: object)
}
if (obj.age === null) {
    console.log("a") // nem ad vissza semmit (ezt ne használjuk)
}

if (obj.age) {
    console.log("igaz") // nem ad vissza, mert obj.age undefined ebben az esetben
}
if (!obj.age) {
    console.log("igaz") // igazat ad vissza
}
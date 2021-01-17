console.log("password");

//creo variabili con maiusc, min, numbers, specials
const maiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const min = "abcdefghijklmnopqrstuvwxyz";
const numb = "0123456789";
const specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

/* function geratePass() {

} */

let rndMaiusc = maiusc[Math.round(Math.random() * maiusc.length)];
let rndMin = min[Math.round(Math.random() * min.length)];
let rndNumb = numb[Math.round(Math.random() * numb.length)];
let rndSpecials = specials[Math.round(Math.random() * specials.length)];

console.log(rndMaiusc);
console.log(rndMin);
console.log(rndNumb);
console.log(rndSpecials);

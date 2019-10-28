// Una funzione per capire se la parola è palindroma

// trasformo la stringa in un array
var parola = prompt('scrivi una parola');
console.log(parola);

var parolaSplit = parola.split("");
console.log(parolaSplit);

// inverto l'array

var arrayReverse = parolaSplit.reverse();
console.log(arrayReverse);

// converto in stringa l'array invertito

// var parolaReverse = arrayReverse.toString();
// console.log(parolaReverse);

var rev = arrayReverse.join("");
console.log(rev);

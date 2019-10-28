// Una funzione per capire se la parola è palindroma

// trasformo la stringa in un array
var parola = prompt('scrivi una parola');
console.log(parola);

var parolaSplit = parola.split("");
console.log(parolaSplit);

// inverto l'array

parolaSplit.reverse();
console.log(parolaSplit);

// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

var utente = prompt('pari o dispari?');
console.log('Utente pari o dispari? ' + utente);

var numUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log("Numero dell'utente " + numUtente);

var numCpu = Math.floor((Math.random() * 5) + 1);

var somma = numUtente + numCpu;
console.log('la somma è = ' + somma);

// function sum(somma){
//   if(somma % 2)
// }

// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// chiedo all'utente di scegliere pari o dispari
var utente = prompt('pari o dispari?');

// chiedo all'utente il suo numero
var numUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log("Numero dell'utente " + numUtente);

// il computer genera il suo numero
var numCpu = Math.floor((Math.random() * 5) + 1);

// sommo i due numeri
var somma = numUtente + numCpu;
console.log('la somma è = ' + somma);

// if pari
if (somma % 2 === 0) {
  console.log('La somma è pari');
} else {
  console.log('La somma è dispari');
}


// function result() {
//
// }

// function scelta(utente){
//   if (utente === 'pari'){
//   return 'pari';
//   console.log(utente);
// }else{
//   return 'dispari';
// }
// }

// function sum(somma){
//   if(somma % 2 === 0);
//   return
// }

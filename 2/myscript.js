// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// chiedo all'utente di scegliere pari o dispari
var utente = prompt('pari o dispari?');

// chiedo all'utente il suo numero
var numUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log("Numero dell'utente " + numUtente);

// definisco il numCpu invocando la funzione numRandom
var numCpu = numRandom(1,5);

var vincitore = pariDispari(numUtente, numCpu);
console.log('vince ' + vincitore);

// FUNZIONI

// creo una funzione per generare numeri RANDOM in un intervallo di valori
function numRandom(min, max) {
  // il computer genera il suo numero
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

// creo la funzione PARI O DISPARI per ritornare pari o dispari
function pariDispari (x,y){
  // sommo i due numeri
  var somma = x + y;
  console.log('la somma è = ' + somma);
  // if pari
  if (somma % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
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

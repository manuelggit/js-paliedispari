// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

var utente = prompt('pari o dispari?');

var numUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log("Numero dell'utente " + numUtente);

var numCpu = Math.floor((Math.random() * 5) + 1);

var somma = numUtente + numCpu;
console.log('la somma è = ' + somma);

var risultato = vincitore(utente);
console.log(risultato);

if (somma % 2 === 0) {
  somma === 'pari';
  console.log('La somma è pari');
} else {
  console.log('La somma è dispari');
}

function vincitore(utente){
  if(utente = 'pari'){
    return "la scelta dell'utente è pari";
  } else {
    return "La scelta dell'utente è dispari";
  }
}

if (risultato = somma){
  console.log("Vince l'utente");
} else {
  console.log('Vince Cpu');
}
// Funzioni

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

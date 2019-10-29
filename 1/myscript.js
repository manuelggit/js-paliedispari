// Una funzione per capire se la parola è palindroma

// trasformo la stringa in un array
var inserimento = prompt('scrivi una parola');
console.log(inserimento);

// invoco la funzione palindroma
palindroma(inserimento);

// creo la funzione palindroma
function palindroma(parola){
  // ciclo for al contrario
  var contraria = "";
  for(var i = parola.length -1; i >= 0; i = i - 1) {
    contraria = contraria + parola[i];
  }
    // è palindroma o no?
    if (contraria === parola) {
      console.log('è palindroma');
    } else {
      console.log('non è palindroma');
    }
}

// con split.reverse.join

// var rev = parola.split("").reverse("").join("");
// console.log(rev);
//
// // stampo se è palindroma o no
//
// if(parola === rev){
//   console.log('palindroma')
//   document.getElementById('id').innerHTML = 'palindroma';
// }else{
//   console.log('non è palindroma');
//   document.getElementById('id').innerHTML = 'non è palindroma';
// }

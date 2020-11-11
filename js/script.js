// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.



// chiedi all'utente numero km
var x = parseInt(prompt("quanti km devi percorrere?"));
console.log(x);

// chiedi all'utente età
var y = parseInt(prompt("quanti anni hai?"));
console.log(y);

// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km)
var z = x * 0.21;


// sconto del 20% per i minorenni e del
// 40% per gli over 65.

if (y < 18) {
  z = z * 20 / 100
}

else if (y >= 65) {
  z = z * 40 / 100
};

// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
document.getElementById("x").innerHTML = x;
document.getElementById("y").innerHTML = y;
document.getElementById("prezzo").innerHTML = z;

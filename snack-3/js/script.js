// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedo all'utente un numero
const userNumber = parseInt(prompt("Dimmi un numero"));

// Calcolo il cubo dei numeri fino a quello scelto dall'utente con ciclo while
let n = 1;

while (n <= userNumber) {
    const cubeNumber = Math.pow(n, 3);
    n++;
    console.log(cubeNumber);
}

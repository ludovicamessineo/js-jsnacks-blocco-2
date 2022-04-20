// jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// CICLO FOR 

// let sum = 0;

// // Chiedo all'utente di inserire un numero 5 volte e faccio la somma
// for (let i = 0; i < 5; i++) {
//     const userNumber = parseInt(prompt("Inserisci un numero"));
//     console.log(userNumber);
//     sum += userNumber;
// }

// // Stampo la somma
// console.log(sum);


// CICLO WHILE

// Dichiaro le variabili
let somma = 0;
let counter = 0;

// Chiedo all'utente di inserire un numero 5 volte e faccio la somma
while (counter < 5) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    somma = somma + userNumber;

    counter++;
}

console.log(somma);

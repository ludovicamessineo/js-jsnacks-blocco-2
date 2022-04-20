// jsnack2. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// Creo due array con nomi e cognomi

const names = ["Mattia", "Riccardo", "Francesco", "Gregorio", "Chiara"];

const lastNames = ["Porta", "Pizzarelli", "Cavalli", "Rabuffetti", "Mangolini"];


// Array dove inserire falsa lista
const fakeList = [];

// Prelevo un elemento random dalle liste all'interno di un ciclo for per avere tre invitati
for (let i = 0; i < 3; i++) {

    const randomNameIndex = Math.floor(Math.random() * names.length);
    console.log(randomNameIndex);
    const randomName = names[randomNameIndex];
    console.log(randomName);
    
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
    console.log(randomLastNameIndex);
    const randomLastName = lastNames[randomLastNameIndex];
    console.log(randomLastName);
    
    // Unisco nomi e cognomi random con Template Literal
    const randomGuest = `${randomName} ${randomLastName}`;
    console.log(randomGuest);
    fakeList.push(randomGuest);

}

console.log(fakeList);
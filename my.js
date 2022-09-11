console.log('JS OK')

/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono
 e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numberList = document.getElementById('number-list');

const myArray = [];

while (myArray.length < 5) {

    const numRandom = Math.floor(Math.random() * 100 + 1);

    if (!myArray.includes(numRandom)) {

        myArray.push(numRandom);

    }
}

console.log(myArray);

numberList.innerHTML = myArray;

const reset = setTimeout(function () {

    numberList.innerHTML = '';

}, 3000);


const userArray = [];

const emptyBox = setTimeout(function () {

    while (userArray.length < 5) {

        const userNumbers = parseInt(prompt('Quali numeri ricordi?'));

        userArray.push(userNumbers);

    }

    for (let i = 0; i < userArray.length; i++) {

        if (userArray[i] === myArray[i]) {
            console.log("Hai indovinato!");
            console.log(`
       Numero random ${myArray[i]}, Numero inserito ${userArray[i]}
               `);
        } else {
            console.log("Non hai indovinato. Ritenta!");
            console.log(`
       Numero random ${myArray[i]}, Numero inserito ${userArray[i]}
               `);
        }
    }

}, 3500);

console.log(userArray);


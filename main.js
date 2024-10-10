//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let randomNumber = document.querySelector('.randomNumber');
let dNoneEl = document.querySelector('.d-none');
let submitEl = document.querySelector('.submit');
let timerEl = document.querySelector('.timer');
let secondi = 30;
let risultatoEl = document.querySelector('.risultato');
let numeroGiocatoreEl = document.querySelectorAll('.numberValue');
let giocaEl = document.querySelector('.gioca');





giocaEl.addEventListener('click', ()=> {
    //Visualizzare in pagina 5 numeri casuali.
//funzione che genera numero randomico

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//verifico se un numero è presente in un array
function isInArray(arr, num) {
    return arr.includes(num);
}
//ciclo for  < 5 in modo da prendere 5 numeri
let numberRandom = [];
for (let i = 0; i = numberRandom.length < 5; i++) {
    const number = getRandomNumber(1, 100);
    if (!isInArray(numberRandom, number)) {
        numberRandom.push(number);
    }
}
randomNumber.innerText = numberRandom.join(',');

const timers = setInterval(contoAllaRovescia, 1000);
//funzione
function contoAllaRovescia() {

    if (secondi > 0) {
        secondi--;
        timerEl.innerHTML = secondi;
    } else {
        clearInterval(timers);
    }
}


//setto timer di 30 secondi
const clock = setTimeout(seconds, 30000);

//aggiungo classe display none per far sparire i numeri e per far apparire gli input 
function seconds() {
    randomNumber.classList.add('d-none');
    dNoneEl.classList.remove('d-none');
    timerEl.classList.add('d-none');
}



//al click del pulsante sumbit effettuo la verifica dei numeri 
submitEl.addEventListener('click', () => {
    let numeriGiocatore = [];
    let valueNumber = numeroGiocatoreEl.value
    for (let i = 0; i < numeroGiocatoreEl.length; i++) {
        let value = parseInt(numeroGiocatoreEl[i].value);
        if (!isNaN(value) && !isInArray(numeriGiocatore, value)) {
            numeriGiocatore.push(value);
        }
    }
    //verifico se i numeri del giocatore corrispondono a quelli randomici
    let numeriIndovinati = [];
    for (let i = 0; i < numeriGiocatore.length; i++) {
        const index = numberRandom.indexOf(numeriGiocatore[i]);
        if (index !== -1) {
            numeriIndovinati.push(numeriGiocatore[i]);
            numberRandom.splice(index, 1); 
        }
    }

    // Mostro il risultato
    if (numeriIndovinati.length > 0) {
        risultatoEl.innerText = `Hai indovinato questi numeri : ${numeriIndovinati.join(', ')}`;
    } else {
        risultatoEl.innerText = 'Nessun numero indovinato.';
    }
   
});
})

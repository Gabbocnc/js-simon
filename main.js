//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let randomNumber = document.querySelector('.randomNumber');
let dNoneEl = document.querySelector('.d-none')


//Visualizzare in pagina 5 numeri casuali.
//funzione che genera numero randomico
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//verifico se un numero è presente in un array
function isInArray(arr, num) {
    return arr.includes(num);
}
//ciclo for  < 5 in modo da prendere numeri
let numberRandom = [];
for (let i = 0; i = numberRandom.length < 5; i++) {
    const number = getRandomNumber(1, 100);
    if (!isInArray(numberRandom, number)) {
        numberRandom.push(number);
    }
}
randomNumber.innerText = numberRandom.join(',');

//setto timer di 30 secondi
setTimeout (seconds, 5000);

//aggiungo classe display none per far sparire i numeri
function seconds() {
    randomNumber.classList.add('d-none');
    dNoneEl.classList.remove('d-none')
}

/*Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/

// creo una funzione per generare un numero casuale da 1 a 5 per il computer

function generateRandomNumber(){
    return Math.floor(Math.random()* 5) + 1
}

// creo un'altra funzione per verificare se il numero è pari

function isEven(number){
    return number % 2 ===0;
}

// chiedo all'utente di scegliere pari o dispari e aggiungo tolowercase per evitare problemi con maiuscole

const userChoice = prompt("scegli pari o dispari:").toLowerCase()

// poi chiedo all'utente di inserire un numero da 1 a 5 

const userNumber = Number(prompt("inserisci un numero da 1 a 5:"));

// genero il numero casuale per il computer dalla funzione

const computerNumber = generateRandomNumber();

// calcolo la somma dei due numeri

const sum = userNumber + computerNumber;

// determino se la somma è pari o dispari e chi ha vinto con le condition


/*Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/

// creo una funzione per generare un numero casuale da 1 a 5 per il computer

function generateRandomNumber(){
    return Math.floor(Math.random()* 5) + 1
}
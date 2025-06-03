
    /*Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

//funzione per verificare se una parola è palindroma
// una parola è palindroma se si legge uguale da sx a dx e viceversa

function isPalindrome(word){
    //converto la parola in minuscolo perchè cosi ignoro le differenze maiuscole/minuscole
    word = word.toLowerCase();
    // apro un ciclo for che confronta i caratteri, primo/ultimo secondo/penultimo
     for (let i = 0; i < word.length / 2; i++) {
        // confronto il carattere alla posizione i con quello speculare
        if (word[i] !== word[word.length - 1 - i]){
            return false; // se trova differenze allora non è palindroma
        }

     }
     return true; // se il ciclo finisce senza trovare differenze allora è palindroma
}

//chiedo all'utente di inserire una parola

const userWord = prompt("inserisci una parola")
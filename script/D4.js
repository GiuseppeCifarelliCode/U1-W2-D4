/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1, l2) {
    if (l1 === l2){
        let squareArea = l1 * l2
        console.log("Square Area is", squareArea)
    } else {
        let rectangleArea = l1 * l2 
        console.log("Rectangle Area is", rectangleArea)
        }
}
// area(2, 3)
// area(4, 4)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(x, y) {
     x = Math.floor(x)
     y = Math.floor(y)
    if (x === y) {
        let sum = (x + y) * 3
        console.log("sum", sum)
        return sum
    } else {
        let sum = x + y
        console.log("sum",sum)
        return sum
    }
}
// crazySum(5, 2)
// crazySum(5, 5)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(x) {
    let diff = Math.abs(x - 19)
    console.log("difference", diff)
    if (x > 19){
        diffAss = diff * 3
        console.log("difference * 3", diffAss)
        return Math.abs(diffAss)
    }
}
// crazyDiff(21)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function(n) {
    n = Math.floor(n)
    if ( 20 < n && n <= 100 || n === 400) {
        console.log ("n =", n)
        return true
    } else {
        return false
    }
}
// boundary(35)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function(str) {
    let array = str.split(" ") 
    if (array[0] === "EPICODE"){
        console.log(str)
        return str
    } else {
        str = "EPICODE " + str
        console.log(str)
        return str
    }
}
// epify("Hello Epicoders")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function(positiveNumber) {
    if (positiveNumber >= 0 || positiveNumber === 0) {
        if (positiveNumber % 3 === 0) {
         console.log("Number is a multiple of 3")
        } else if (positiveNumber % 7 === 0) {
            console.log("Number is a multiple of 7")
        } else {
        console.log("Number isn't a multiple of 3 or 7")
                }
    } else {
    console.log("Number isn't positive or is equal to 0")
        }
}
// check3and7(2)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(string) {
    let finalString = ""
    for ( let i = string.length - 1 ; i >= 0; i--) {
          finalString += string.charAt(i)
    }
    console.log("Reversed string is", finalString)
}
// reverseString("EPICODE")

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(string) {
    let array = string.split(" ")
    for ( let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
        }
        string = array.join(" ")
        console.log(string)
    }
// upperFirst("hello epicoders")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(string) {
    let finalString = string.slice(1, string.length - 1)
    console.log(finalString)
}
// cutString("hello epicoders")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function(n) {
    let array = []
    for ( let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random()*11)
    }
    console.log(array)
    return array
}

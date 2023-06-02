// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
checkArray = function (array) {
    let sum = 0
    for ( let i = 0; i < array.length; i++) {
        if ( array[i] > 5) {
            console.log(array[i])
            sum += array[i]
        }
    }
    console.log("sum of numbers > 5 =", sum)
    return sum
}
// let array = giveMeRandom(10)
// checkArray(array)

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
    {
        name: "computer",
        price: 1500,
        quantity: 1,
        id: 1574,
    },
    {
        name: "mouse",
        price: 30,
        quantity: 5,
        id: 2694,
    },
    {
        name: "dashboard",
        price: 120,
        quantity: 2,
        id: 7645,
    }
]
const shoppingCartTotal = function(myArray = shoppingCart) {
    let totalSum = 0
    for ( let i = 0; i < shoppingCart.length; i++){
        totalSum += (shoppingCart[i].price * shoppingCart[i].quantity)
    }
    console.log("Total Sum is", totalSum)
    return totalSum
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function(newItemName, newItemPrice, newItemQuantity, newItemId) {
    let newItem = {
        name: newItemName,
        price: newItemPrice,
        quantity: newItemQuantity,
        id: newItemId,
    }
    shoppingCart.push(newItem)
    return shoppingCart.length
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function(myArray = shoppingCart) {
    let indexMaxPrice = 0
    let i 
    for ( i = 0; i < shoppingCart.length - 1; i++) {
        if ( shoppingCart[i].price > shoppingCart[i+1].price) {
            indexMaxPrice = i
        } 
    }
    return shoppingCart[indexMaxPrice]
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function(myArray = shoppingCart) {
    return (shoppingCart[shoppingCart.length - 1])
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function(x) {
    let randomNumber = 0
    let i = 0
    if( 0 < x && x < 9) {
        while( i < 3) {
            randomNumber = Math.floor(Math.random() * 10)
            if( randomNumber > x) {
                console.log(randomNumber)
                i++
            } else {
                i = 0
            }
        }
    } else {
        console.log("Insert number is not available")
    }
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const average = function(myArray) {
    let avg = 0
    for( let i = 0; i < myArray.length; i++) {
        if( typeof myArray[i] === "number") {
            avg = (avg + myArray[i])/2
        } else {
            console.log("There isn't a number in this position", myArray[i])
    }
    }
    console.log("Average is", avg)
    return avg
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function(myArray) {
    let maxString = "" 
    for( let i = 0; i < myArray.length - 1; i++) {
        if( myArray[i].length > myArray[i+1].length) {
            maxString = myArray[i]
        }
    }
    console.log("Longest string is", maxString)
    return maxString
}
// let arr = ["Hi", "Bye", "Hello", "Dumbledore", "GoodBye", "Severus"]
// longest(arr)

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (emailContent) {
    switch(true) {
        case emailContent.includes("SPAM") : 
        console.log("SPAM");
        return false
        break
        case emailContent.includes("SCAM") : 
        console.log("SCAM");
        return false
        break
        default : 
        console.log("This email is safe"); 
        return true
    }
}
// antiSpam("This email is just for SCAM")

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
const dayPassed = function(date) {
    if( Date.parse(date) !== Date.parse(date) ){ // Check for NaN equality
        console.log("Insert date is not valid")
    }   else {
        let todayMilliseconds = Date.parse(new Date())
        let milliseconds = Date.parse(date)
        milliseconds = todayMilliseconds - milliseconds
        let days = Math.floor(milliseconds / 86400000)
        console.log("Days passed from the insert date", days)
        return days
    }
}
// dayPassed("Mario")
// dayPassed("2023-05-01")

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

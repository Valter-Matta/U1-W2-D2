/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 9
let num2 = 8
if (num1 < num2) {
  console.log('il più piccolo è ' + num1)
} else if (num1 > num2) {
  console.log('il più piccolo è ' + num2)
} else {
  console.log('i numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numFive = 5
if (numFive !== 5) {
  console.log('not equal')
} else {
  console.log('il numero inserito è ' + numFive + ', che è uguale a 5')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let moltiplicatorFive = 49
if (moltiplicatorFive % 5 === 0) {
  console.log(
    'il numero ' +
      moltiplicatorFive +
      ', è divisibile per 5 ' +
      'perchè il risultato è ' +
      (moltiplicatorFive % 5)
  )
} else {
  console.log('il numero ' + moltiplicatorFive + ', non è divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let number1 = 8
let number2 = 1
if (number1 === 8 || number2 === 8) {
  console.log('Uno dei due numeri è uguale a ' + 8)
} else if (number1 + number2 === 8 || number1 - number2 === 8) {
  console.log('La somma o la sottrazione dei due numeri è uguale a ' + 8)
} else {
  console.log(
    'Nessuno dei due numeri è uguale a 8, nemmeno sommati o sottratti'
  )
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 30
if (totalShoppingCart > 50) {
  console.log(
    'Congratulazioni, la spedizione è gratuita.' +
      ' Il totale addebitato sarà di ' +
      totalShoppingCart +
      '€'
  )
} else {
  console.log('Il totale addebitato sarà di ' + (totalShoppingCart + 10) + '€')
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let blackFridayCart = 60
let sales = blackFridayCart * 0.2
let salesApplied = blackFridayCart - sales
if (blackFridayCart > 50) {
  console.log(
    'Oggi è il Black Friday hai il 20% di sconto sul totale, in più spedizione gratuita dato che hai superati i 50€ di spesa.' +
      ' Il totale addebitato sarà di ' +
      +salesApplied +
      '€'
  )
} else {
  console.log('Il totale addebitato sarà di ' + (salesApplied + 10) + '€')
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const order = []
let variable1 = 1
let variable2 = 2
let variable3 = 6
if (variable1 < variable2 && variable1 < variable3) {
  order.push(variable1)
} else if (variable2 < variable1 && variable2 < variable3) {
  order.push(variable2)
} else {
  order.push(variable3)
}
console.log(order)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let type = 123n
let result = typeof type
console.log(result)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let pariOdispari = 49
if (pariOdispari % 2 === 0) {
  console.log('il numero ' + pariOdispari + ', è pari ')
} else {
  console.log('il numero ' + pariOdispari + ' è dispari')
}

// ESERCIZIO 10
//Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 4
if (val < 10 && val >= 5) {
  console.log('Meno di 10')
} else if (val < 5) {
  console.log('Meno di 5')
} else if (val >= 10) {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

let me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const myArray = []
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
myArray.splice(9, 1, 100)

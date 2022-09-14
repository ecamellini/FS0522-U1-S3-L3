// Di solito i nomi delle funzioni sono dei verbi...
// Che descrivono quello che la funzione FA

function sommaTreNumeri(numero1, numero2, numero3) {
  // All'interno della funzione,
  // i parametri li uso esattamente come se fossero
  // delle variabili che hanno un valore, cioè quello che gli viene dato quando
  // la funzione viene chiamata.
  // Esistono solo dentro questa funzione -- cioè, sono visibili solo dentro a questo
  // blocco di codice. Lo SCOPE/Visibilità di queste variabili è questo blocco di codice.
  if (
    (typeof numero1 === 'number') &&
    (typeof numero2 === 'number') &&
    (typeof numero3 === 'number')
  ) {
    let risultato = numero1 + numero2 + numero3
    return risultato
  } else {
    // console.error è come console.log, ma lo stampa in rosso come un errore
    console.error("Questa funzione può sommare solo numeri.")
  }
}

let somma = sommaTreNumeri(3, -12, 99)
// Se io qua non stampo, allora nella console non vedrò nulla...
// Ho solo una variabile chiamata somma con dentro il risultato della funzione, cioè un numero
// Console log stampa qualcosa a schermo. Non c'entra nulla con il return.
console.log(somma)

console.log( sommaTreNumeri(1, 2, 3) + sommaTreNumeri(45, 8 , 6) )


// Esempio di scope delle variabili 1

// nome e cognome qua NON ESISTONO
let nome = "ANTONIO" // Questa variabile nome è diversa da quella che c'è nella funzione
let variabileEsterna = 456456

function saluta(nome, cognome) {
  let nuovaVariabile = 123123;
  console.log(variabileEsterna) // ESISTE, perchè è definita in un blocco più esterno, padre

  console.log(`Ciao ${nome} ${cognome}, benvenuto!`)

  // Questa funzione non ha una istruzione return, quindi restituirà undefined
  // ATTENZIONE: return e quello che viene stampato nella console sono due cose diverse.
}

// nuovaVariabile qua NON ESISTE -- perché nuovaVariabile è definita nel blocco della funzione
// Se eseguo questo console log il programma va in errore
// console.log(nuovaVariabile)

saluta("Paolo", "Rossi")
saluta("Guido", "Bianchi")
saluta(nome, "Verdi")


// Esempio di scope delle variabili 2

var saluto = "Buongiorno!"

function salutaEBasta() {
  saluto = "Ciao!" // Questa è diversa, saluto (quella fuori) non viene toccata, qua usa quella interna
  console.log(saluto)

  // Questa è una funzione che non ha nessun input e nessun valore di return, comunque fa qualcosa.
}

console.log(saluto) // Qua vedo comunque "Buongiorno!", siamo fuori dal blocco
salutaEBasta() // Qua vedo "Ciao!"

// Questa cosa della visilibilità / scope delle variabili si applica a OGNI BLOCCO DI CODICE.
// Cioè, anche agli IF, ad esempio. Tutte le volte che due graffe per delimitare un pezzo di codice.

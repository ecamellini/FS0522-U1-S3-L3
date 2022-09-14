/*
Dovete creare un'applicazione che dica all'utente se può
partecipare al casting per una serie TV oppure no.

Per partecipare al casting l'utente deve:
- Avere i capelli biondi o castani
- Avere tra i 30 e i 40 anni
- Essere di sesso maschile

Oppure:
- Avere i capelli rossi
- Avere più di 20 anni
- Essere di sesso femmnile

Quest'applicazione deve raccogliere i dati necessari dall'utente e
mostrare un messaggio che dice se può oppure non può partecipare.
*/


// Input - raccolgo i dati che mi servono

// Dati da raccogliere:
// Età --> vogliamo un numero
// Maschio o femmina --> questo dato potrebbe essere una stringa ('M' oppure 'F'), oppure un booleano
// Colore capelli --> anche in questo caso, se vogliamo usare prompt, ci va bene una stringa
// Nome e cognome così possiamo salvarli nel caso sia ammesso al casting
let nomeCandidato = prompt("Inserisci il tuo nome:")
let cognomeCandidato = prompt("Inserisci il tuo cognome:")
let eta = Number(prompt("Inserisci la tua età:"))
let genere = prompt("Inserisci il tuo genere (inserisci M oppure F):") // Qua sarebbe giusto avere una scelta multipla, ma per ora usiamo prompt
let coloreCapelli = prompt("Inserisci il colore dei tuoi capelli (NB tutto minuscolo, senza spazi):")


// Algoritmo - manipolo i dati per arrivare alle conclusioni/informazioni che mi servono

// NOTA: questo approccio ha dei problemi - se l'utente inserisce Biondi con la B maiuscola
// già non funziona
let capelliBiondi = coloreCapelli === "biondi"
let capelliCastani = coloreCapelli === "castani"
let tra30e40 = eta >= 30 && eta <= 40
let genereMaschio = genere === "M"

// Scrivere (capelliBiondi === true) o scrivere capelliBiondi è la stessa cosa
// perché capelliBiondi è già un boolean
let puoAccedereAlPrimoRuolo = (capelliBiondi || capelliCastani) && tra30e40 && genereMaschio

// Stessa cosa:
// let puoAccedereAlPrimoRuolo = (coloreCapelli === "biondi" || coloreCapelli === "castani") && (eta >= 30 && eta <= 40) && (genere === "M")

let capelliRossi = coloreCapelli === "rossi"
let piuDi20 = eta >= 20
let genereF = genere === "F" // Stessa cosa che dire !genereMaschio

let puoAccedereAlSecondoRuolo = capelliRossi && piuDi20 && genereF

// Stessa cosa:
// let puoAccedereAlSecondoRuolo = coloreCapelli === "rossi" && eta >= 20 && genere === "F"

let puoAccedereAlCasting = puoAccedereAlPrimoRuolo || puoAccedereAlSecondoRuolo

// Tutte queste righe potevamo anche scriverle come:
// let puoAccedereAlCasting = (
//     (coloreCapelli === "biondi" || coloreCapelli === "castani") && (eta >= 30 && eta <= 40) && (genere === "M")
//   ) || (
//     coloreCapelli === "rossi" && eta >= 20 && genere === "F"
//   )

// Output
if (puoAccedereAlCasting) {// Se metto puoAccedereAlCasting === true è la stessa cosa
  document.write("Complimenti, puoi accedere!")
} else {
  document.write("Non puoi accedere, riprova per le prossime serie TV.")
}

// ALTERNATIVA: Potevo usare l'operatore ternario
// Domanda (cioè, un boolean) ? Sì (cioè, cosa faccio in caso sia true ): No (cosa faccio in caso sia false)
// let messaggioDaScrivere = puoAccedereAlCasting ? "Complimenti!" : "Non puoi accedere."
// document.write(messaggioDaScrivere)

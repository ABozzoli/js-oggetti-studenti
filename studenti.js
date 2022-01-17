// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 32
};

// Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto.
for(let key in studente){
    console.log(key + ': ' + studente[key]);
}

// Creare un array di oggetti di studenti.
let studenti = [
    {
        nome: 'Nicola',
        cognome: 'Verdi',
        eta: 15
    },
    {
        nome: 'Gabriele',
        cognome: 'Bianchi',
        eta: 21
    },
    {
        nome: 'Paolo',
        cognome: 'Grassi',
        eta: 27
    }
];

// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
for(let i = 0; i < studenti.length; i++){
    let studenteCorrente = studenti[i];
    console.log('nome: ' + studenteCorrente.nome);
    console.log('cognome: ' + studenteCorrente.cognome);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
let nomeStudente = prompt('Inserisci nome studente');
let cognomeStudente = prompt('Inserisci cognome studente');
let etaStudente = prompt('Inserisci età studente');

// Aggiungere il nuovo studente all’array di studenti.
studenti.push({
    nome: nomeStudente,
    cognome: cognomeStudente,
    eta: etaStudente
});

// Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà.
for(let i = 0; i < studenti.length; i++){
    let studenteCorrente = studenti[i];
    for(let key in studenteCorrente){
        console.log(key + ': ' + studenteCorrente[key]);
    }
}

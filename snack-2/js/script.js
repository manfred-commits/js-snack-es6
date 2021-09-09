// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.





// SEZIONE CODICE PRINCIPALE





// SEZIONE VARIABILI
let contatore=parseInt(prompt("Inserisci il numero di squadre che desideri inserire: "));

let nome=[];

let squadreDiCalcio=[];

let nuoveSquadre = {
    "nome":nome,
    "puntiFatti":0,
    "falliSubiti":0,
}

const getRndInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);



// 1. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

console.log(squadreDiCalcio);


for(let i=0;i<contatore;i++){
    nome[i]=prompt(`Inserisci il nome della ${i+1}° squadra`);

    squadreDiCalcio.push(
        nuoveSquadre = {
            "nome":nome[i],

            // Generare numeri random al posto degli 0 nelle proprietà:
            // Punti fatti e falli subiti.

            "puntiFatti":getRndInt(1,10),
            "falliSubiti":getRndInt(1,10),
    }   
    );
}

console.log(squadreDiCalcio);

// 2. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const nuovoArray= []; 

for(let i=0;i<contatore;i++){
    nuovoArray.push( 
        {
         "nome":squadreDiCalcio[i].nome,
         "falliSubiti":squadreDiCalcio[i].falliSubiti
        }
    )
}

console.log(nuovoArray);


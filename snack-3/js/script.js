
// // Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.




// SEZIONE FUNZIONI


// 1.2 Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// utilizzando il metodo filter verifico che gli index dell'array sono compresi tra i due numeri




const rndmInt=(min,max) => Math.floor(Math.random() * (max - min + 1) + min);


function sliceWannaby(num1,num2,array){

    while(num1>num2){
        num1 = rndmInt(0,array.length);
    }
    while(num2<num1){
        num2 = rndmInt(0,array.length);
    }

    console.log(`Primo numero ${num1}`);
    console.log(`Secondo numero ${num2}`);


    // FILTER SU UNA RIGA
    const slicedArray = array.filter((element,index) => index>=num1 && index<=num2 );
    // /FILTER SU UNA RIGA

    return slicedArray;

}
// /SEZIONE FUNZIONI



// SEZIONE CODICE PRINCIPALE






// SEZIONE VARIABILI


let arrayToSlice = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let primoNum = rndmInt(0,arrayToSlice.length);
let secondoNum = rndmInt(0,arrayToSlice.length);

 

console.log(`Primo numero ${primoNum}`);
console.log(`Secondo numero ${secondoNum}`);
console.log(`Array ${arrayToSlice}`);



// /SEZIONE VARIABILI

// FILTER

// 1. Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// utilizzando il metodo filter verifico che gli index dell'array sono compresi tra i due numeri


// const slicedArray = array.filter((element,index) => {
//     if(index>=num1 && index<=num2){
//         return true;
//     }
// });

// /FILTER

const arraySliced = sliceWannaby(primoNum,secondoNum,arrayToSlice);

console.log(`Nuovo array generato:
${arraySliced}
prendendo gli elementi di indice compresi tra i numeri ${primoNum} e ${secondoNum}`);




// /SEZIONE CODICE PRINCIPALE


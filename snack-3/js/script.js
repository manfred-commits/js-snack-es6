
// // Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.




// SEZIONE FUNZIONI
    const rndmInt=(min,max) => Math.floor(Math.random() * (max - min + 1) + min);
// /SEZIONE FUNZIONI



// SEZIONE CODICE PRINCIPALE






// SEZIONE VARIABILI


let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let num1 = rndmInt(0,array.length);
let num2 = rndmInt(0,array.length);

while(num1>num2){
    num1 = rndmInt(0,array.length);
}
while(num2<num1){
    num2 = rndmInt(0,array.length);
}
 

console.log(`Primo numero ${num1}`);
console.log(`Secondo numero ${num2}`);
console.log(`Array ${array}`);



// /SEZIONE VARIABILI


// 1. Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// utilizzando il metodo filter verifico che gli index dell'array sono compresi tra i due numeri



// const slicedArray = array.filter((element,index) => {
//     if(index>=num1 && index<=num2){
//         return true;
//     }
// });

// FILTER SU UNA RIGA

const slicedArray = array.filter((element,index) => index>=num1 && index<=num2 );

// /FILTER SU UNA RIGA


console.log(slicedArray);
console.log(`Nuovo array generato:
${slicedArray}
prendendo gli elementi di indice compresi tra i numeri ${num1} e ${num2}`);




// /SEZIONE CODICE PRINCIPALE


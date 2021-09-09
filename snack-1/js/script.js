// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici =[
    {
        "nome": "cannondale",
        "peso": 4,
    },
    {
        "nome": "pinnarello",
        "peso": 3,
    },
    {
        "nome": "scott",
        "peso": 6,
    },
    {
        "nome": "canyon",
        "peso": 5,
    },
    {
        "nome": "vektor",
        "peso": 11,
    },
    {
        "nome": "sava",
        "peso": 10,
    },
    {
        "nome": "daricello",
        "peso": 12,
    },
    {
        "nome": "ciocc",
        "peso": 9,
    },
    {
        "nome": "bianchi",
        "peso": 6,
    },
    {
        "nome": "trek",
        "peso": 8,
    },
    {
        "nome": "colnago",
        "peso": 4
    },
]
console.log(bici);


// let biciPiùLeggera=bici[0]["peso"];

// console.log(biciPiùLeggera);

// let posizione =0;

// console.log(posizione);

// for(let i=0; i<bici.length;i++){

//     if(biciPiùLeggera>bici[i]["peso"]){
//         biciPiùLeggera=bici[i]["peso"];
//         posizione=i;
//     }

// }
// console.log(biciPiùLeggera);

// console.log(posizione);

// console.log(`La bici più leggera è la ${bici[posizione]["nome"]} con un peso pari a ${biciPiùLeggera}`);


// SOLUZIONE DESTRUCTURING

// questa dichiarazione equivale a dire:
// let nome=bici[0].nome;
// let peso=bici[0].peso;

let {nome,peso}= bici[0];

console.log(nome,peso);



for(let i=0; i<bici.length;i++){

    if(peso>bici[i]["peso"]){
        peso=bici[i].peso;
        nome=bici[i].nome;
    }

}
console.log(peso,nome);

console.log(`La bici più leggera è la ${nome} con un peso pari a ${peso}`);

// SOLUZIONE DESTRUCTURING

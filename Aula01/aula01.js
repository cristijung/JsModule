//Tipos de variáveis
//const e let

const forma = 'quadrado';
const altura = 12;
const comprimento = 26;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

//console.log(area);
//-------------------------------------------------------
//operadores aritméticos
const valorUm = 45;
const valorDois = 48.8;
const operaAdd = valorUm + valorDois;
//console.log(operaAdd);
const operaSub = valorUm - valorDois;
//console.log(operaSub);
const operaMulti = valorUm * valorDois;
//console.log(operaMulti);
const operaDiv = valorUm / valorDois;
//console.log(operaDiv);
//------------------------------------------------------
//String
const nome = 'Ana';
const sobreNome = 'Banana';
const idade = 25;
//console.log('Nome: ' + nome + ' ' + sobreNome + ' ' + idade + ' anos'); //concatenando 
//console.log(`Nome: ${nome} ${sobreNome}, com idade de ${idade} anos`); //template string

//-------------------------------------------------------

// const n1 = 22;
// const n2 = '24';
// const n3 = 'Pafúncio';
// const soma = n1 + Number(n2);
// const somaConacatenada = n1 + n2; //concatena
// const somaTres = n1 - n3;
// // console.log(soma);
// console.log(somaConacatenada);
//console.log(somaTres);

//--------------------------------------------------------

const v1 = '5';
const v2 = 5;
// console.log(v1 == v2);
// console.log(v1 === v2);
// console.log(v1 != v2); //diferente
// console.log(v1 !== v2); //não idêntico
//-------------------------------------------------------

const userName = 'AMANDA.SILVA';
const login = 'amanda.silva';
const tratamentoDado =  login.toUpperCase();
//console.log(userName === tratamentoDado); 
let input = null;
if (input === null) {
    //console.log('Não há info');
} else {
    //console.log(input);
}
//-----------------------------------------------------------
let cor;
//console.log(cor);
//-----------------------------------------------------------
let calculo = umCalculo(2, 6);

function umCalculo(x, y) {
    return x + y;
}

console.log(calculo);
//------------------------------------------------
function texto() {
    return console.log('Oi');    
}

texto();
//----------------------------------------------
function divisao(a, b) {
    console.log(a / b)
}

divisao(10, 2);
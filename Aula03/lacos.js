//Laço For
const contratadoEm = 2015;
var anoAtual = 2023;

const salarioInicial = 5899.56;
let salario = salarioInicial;
let percentualAumento = 1.5 / 100;

// console.log(`Ano atual: ${contratadoEm}`);
console.log(`O salário atual é: R$${salario.toFixed(2)}`);

for(let ano = contratadoEm + 1; ano <= anoAtual; ano++) {
    if(ano <= anoAtual) {
        percentualAumento = percentualAumento * 2;
    }
    
    salario = salario + (salario * percentualAumento);
    console.log(`\n\n Ano atual: ${ano}`);
    console.log(`O percentual de aumento foi: ${percentualAumento * 100}%`);
    console.log(`O salário atual é: R$${salario.toFixed(2)}`);
}

const aumentoTotal = ((salario / salarioInicial) * 100);
console.log(`\n\n Em comparação ao seu salário inicial, você teve um aumento de: ${aumentoTotal.toFixed(2)}%`);

//For of -----------------------------------------
let letras = 'Eu amo melancia';
for (let vlr of letras) {
   // console.log(vlr);
}

let num = '1, 2, 3, 4, 5, 6';
for (let numeros of num) {
    // console.log(numeros);
}

//For in ----------------------------------------
const cores = {
    a: 'Amarelo',
    b: 'Vermelho',
    c: 'Verde',
    d: 'Rosa'
}

for (let itens in cores) {
    console.log(itens + ": " + cores[itens]);
}

//While ----------------------------------------

let salarioDois = 5000;
while(salarioDois < 6000) {
    salarioDois += 100;
    console.log(`O salário tem o valor de: R$${salarioDois}`)
}

//Do While ------------------------------------
var numero = 0;
do {
    console.log(`O número que temos é: ${numero}`);
    numero++
} while (numero <= 100)
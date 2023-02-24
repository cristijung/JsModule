//IF/ELSE

const hora = new Date().getHours();
if (hora < 18) {
    console.log('Bom Dia!');
} else {
    console.log('Boa Tarde');
}

//
const saudacao = 22;
if (saudacao <= 12) {
    console.log('Bom Dia!');
} else if (saudacao < 18) {
    console.log('Boa Tarde');
} else {
    console.log('Boa Noite!');
}
//Ternário -----------------------------------------------

const salario = 10000;
let bonus = salario * (salario <= 10000 ? 0.35 : 0.25);
console.log(bonus);

const nomeAluno = 'Petúnia';
const situacao = 5.2;
let resultadoFinal = (situacao >= 6) ? 'Aprovado' : 'Reprovado';
console.log(`O resultado da média final do ${nomeAluno} é: ${resultadoFinal} com média de: ${situacao}`);

//Switch case ------------------------------------------
const frutas = 'Melancia';

switch (frutas) {
    case 'Morango':
        console.log('O morango é saboroso e suculento');
        break;
    case 'Melancia':
        console.log('Melancia pesa 500Kg');
        break;
    case 'Uva':
        console.log('O verão é a temporada de uva');
        break;
    default:
        console.log(`Nenhuma fruta é ${frutas}`);
}

console.log(frutas);

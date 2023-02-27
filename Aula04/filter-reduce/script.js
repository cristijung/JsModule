//reduce
//calculo das médias das salas dos cursos
const salaJs = [8, 5, 8, 9, 10];
const salaJava = [7.8, 9, 8, 6, 10];
const salaReact = [2, 8, 7, 9, 9];

function calcMedia(mediaDeSala) {
    const somarNotas = mediaDeSala.reduce((acc, nota) => acc + nota, 0);
    const media = somarNotas / mediaDeSala.length;
    return media;
}
console.log(`A média da sala de Js é: ${calcMedia(salaJs)}`);
console.log(`A média da sala de Java é: ${calcMedia(salaJava)}`);
console.log(`A média da sala de React é: ${calcMedia(salaReact)}`);

//filter
var numeros = [22, 13, 47, 15, 24, 8, 12, 33, 89];
function filtrarNumPares(vlr) {
    if (vlr % 2 === 0)
    return vlr
}

var osPares = numeros.filter(filtrarNumPares);
console.log(osPares);

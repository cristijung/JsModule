//foreach

let frutas =['Banana', 'Morango', 'Ameixa', 'Melancia'];

function imprimir(item) {
    console.log(item);
}

frutas.forEach(imprimir);
//----------------------------------------------
//localizando elementos específicos

let fruits = ['Banana', 'Morango', 'Ameixa', 'Melancia', 'Maçã', 'Abacaxi'];
frutasIniciadascomM = []; //array vazio
novoIndice = 0;

function selecionarFrutas(item, indice) {
    if (fruits[indice].indexOf('A') == 0) {
        frutasIniciadascomM[novoIndice] = fruits[indice];
        novoIndice++;
    }
}

fruits.forEach(selecionarFrutas);
console.log(frutasIniciadascomM);
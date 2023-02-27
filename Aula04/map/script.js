//map()

//array de objetos
let users = [
    {nome: 'Ana', sobreNome: 'Silva', idade: 18},
    {nome: 'Bia', sobreNome: 'Souza', idade: 22},
    {nome: 'José', sobreNome: 'Lima', idade: 42},
    {nome: 'João', sobreNome: 'Silveira', idade: 13}
];

let fullInfo = users.map(function(element){
    return `${element.nome} ${element.sobreNome}, com idade de: ${element.idade};`
})

//console.log(fullInfo);

//---------------------------------------------------------------
const listaMercadorias = [
    {item: 'TV', preco: 5800},
    {item: 'Sofá', preco: 7589},
    {item: 'Sala de Jantar', preco: 17589},
    {item: 'Poltrona', preco: 1889},
];

const mostrarMercadorias = listaMercadorias.map(mercadorias);
function mercadorias(elemento) {
    return{
        item: elemento.item,
        preco: elemento.preco
    }
}

console.log(mostrarMercadorias);

const mercadoriasComDesconto = listaMercadorias.map(aplicarDesconto);
function aplicarDesconto(elemento) {
    return{
    item: elemento.item,
    preco: (elemento.preco - (elemento.preco * 0.2))
    }
}

mercadoriasComDesconto.forEach(elemento => {
    console.log(
        `O preço da mercadoria ${elemento.item} com desconto é: 
        ${elemento.preco.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}`);
})


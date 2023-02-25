

function somaPares(num) {
    let resultado = 0;
    for(let i = 0; i <= num; i++) {
        if(i % 2 === 0) {
            resultado += i;
        }
    }
    return resultado;
}

console.log(somaPares(50));
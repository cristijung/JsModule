//Async e Await
// async function textinho() {
//     return 'Aqui já é uma Promise'
// }
// textinho()
//-----------------------------------------------
function resolverDepoisdeDois(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
}

async function adicionar(x) {
    var a = resolverDepoisdeDois(20);
    var b = resolverDepoisdeDois(30);

    return x + await a + await b;
}

adicionar(10).then(v => {
    console.log(v);
});

async function adicionarDois(x) {
    var a = await resolverDepoisdeDois(20);
    var b = await resolverDepoisdeDois(30);
    return x + a + b;
}

adicionarDois(10).then(v => {
    console.log(v)
});


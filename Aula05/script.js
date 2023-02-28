function function01() {
    console.log('Aparece depois de 4 segundos')
}

function function02() {
    setTimeout(function01, 4000);
    console.log('Testando funções assíncrinas!');
    console.log('-----')
}

function02()
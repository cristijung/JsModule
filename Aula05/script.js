//funções temporizadoras


// function function01() {
//     console.log('Aparece depois de 4 segundos')
// }

// function function02() {
//     setTimeout(function01, 4000);
//     console.log('Testando funções assíncrinas!');
//     console.log('-----')
// }

// function02()
//---------------------------------------------------
//Sintaxe básica
// setTimeout(() => {
//     console.log('Aqui vai a mensagem');
// }, 5000)

// setTimeout(() => {console.log('Msg1 - aparece depois de 4s')}, 4000);
// setTimeout(() => {console.log('Msg2 - aparece depois de 6s')}, 6000);
// setTimeout(() => {console.log('Msg3 - aparece depois de 1s')}, 1000);

//------------------------------------------------------
//Contador de números

var counter = 0;
var timer = setInterval(function() {
    if (counter >= 60) {
        clearInterval(timer);
    }
    console.log(counter++)
}, 1000);


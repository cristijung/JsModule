//Promises
//Exemplos

// const tempo = (duration) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration)
//     })}
//     tempo(4000)
//     .then(function() {
//         console.log('Aparece depois de 4s')
        
//     })

//-------------------------------------------------------
//Promise.all
// var p = Promise.all([]); 
// var p2 = Promise.all([1337, 'Oi'])

// console.log(p);
// console.log(p2)
// setTimeout(function() {
//     console.log('não temos nada agora');
//     console.log(p2)
// });

//--------------------------------------------------------
//Promise.any

// const pErr = new Promise((resolve, reject) => {
//     reject("Sempre falha");
//   });
  
//   const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Executa eventualmente");
//   });
  
//   const pFast = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "Faz rapidamente");
//   });
  
//   Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     //Implementa primeiro
//   });
  //----------------------------------------------
  //Promise normal
var p1 = new Promise(function(resolve, reject) {
    resolve('Sucesso');
});

p1.then(function(value) { //quando é resolve
    console.log(value);  //sucesso
    throw 'Ahhhhhhhhh, não';
}).catch(function(e) {
    console.log(e); 
}).then(function(){
    console.log('Depois de um catch, a sequência de promises é restaurada');
}), function() {
    console.log('Caiu no catch, não deu certo');
};

//----------------------------------------------------
function resolverDepois(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}
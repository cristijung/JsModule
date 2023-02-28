//Promises
//Exemplos

const tempo = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })}
    tempo(4000)
    .then(function() {
        console.log('Aparece depois de 4s')
        
    })
// //Arrays e métodos

// //array padrão
// const acessoriosUm = ['Sapato', 'Vestido', 'Chapéu', 'Casaco'];
// //console.log(acessoriosUm);
// //-----------------------------------------------
// const frutas = ['banana', 'uva', 'melancia'];
// console.log(frutas);
// console.log(frutas.length); //retorna o tamanho do array
// frutas.push('Mamão'); //adiciona novo elemento no array --> última posição
// console.log(frutas);
// console.log(frutas.length);
// frutas.pop(); //exclui o último elemento do array
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[2]); //acessa um elemento específico do array

//-------------------------------------------------------------------
// const alunos = ['Pafúncio', 'Rui', 'Bia', 'Ana'];
// console.log(alunos);
// alunos.sort(); //coloca os elementos em ordem crescente
// console.log(alunos); 
// alunos.reverse(); //coloca os elementos em ordem reversa
// console.log(alunos);

// //--------------------------------------------------------------------
// const turmaA = ['Pafúncio', 'Rui', 'Bia', 'Ana'];
// const turmaB = ['Beatriz', 'Petúnia', 'João', 'Renato'];
// const turmaNova = turmaA.concat(turmaB); //concatena 2 ou + arrays - cria um novo array
// console.log(turmaNova);
// turmaNova.sort();
// turmaNova.shift(); //exclui o primeiro elemento do array
// console.log(turmaNova);
// turmaNova.unshift('Mafalda'); //inclui um um novo elemento no início do array
// console.log(turmaNova);
//-----------------------------------------------------------------

//slice
const turmaAlunos = [
    'João',
    'Juliana',
    'Ana',
    'Caio',
    'Lara',
    'Aline',
    'Josefo',
    'Pafúncio',
    'Fabiano',
    'André',
    'Robercleison',
    'Diênnipher',
    'Masterson',
    'Carlos',
    'Bia',
    'Isabela',
    'Viaviano',
    'Marcelo',
    'Daisy',
    'Clóvis'
]

const sala1 = turmaAlunos.slice(0, turmaAlunos.length / 2); //slice divide a turma a partir do índice zer
const sala2 = turmaAlunos.slice(turmaAlunos.length / 2); //obtém o restante dos alunos
// console.log(sala1);
// console.log(sala2);
//--------------------------------------------------------
const estudantes = [    
        'João',
        'Juliana',
        'Ana',
        'Caio',
        'Lara',
        'Aline',
        'Josefo',
        'Pafúncio',
        'Fabiano',
        'André',
        'Robercleison',
        'Diênnipher',
        'Masterson',
        'Carlos',
        'Bia',
        'Isabela',
        'Viaviano',
        'Marcelo',
        'Daisy',
        'Clóvis'    
]

estudantes.splice(1, 2, 'Pedrito'); //splice, exclui elementos de índice especificado - neste caso adicionamos + 1 aluno
estudantes.sort();
//console.log(estudantes);
//---------------------------------------------------------
//Juntando listas e acessando em duas dimensões
const alunosEscola = ['Pafúncio', 'Ana', 'Bia', 'Caio'];
const mediasEscola = [10, 8.4, 7.8, 6.2];

const infoEscola = [alunosEscola, mediasEscola]; //criamos outro array
//console.log(infoEscola); --> só para ver a junção dos arrays
// console.log(
//     `Aluno(a) de nº 1 na chamada é: ${infoEscola[0][1]} 
//     A nota deste(a) aluno(a) é: ${infoEscola[1][1]}`
// );

//--------------------------------------------------
//usando includes e indexOf
const alunoss = ['Pafúncio', 'Ana', 'Bia', 'Caio'];
const medias = [10, 8.4, 7.8, 6.2];

const listaAlunosMedias = [alunoss, medias];

function exibirInfos(aluno) { //usando includes
    if (listaAlunosMedias[0].includes(aluno)) {
        const [alunoss, medias] = listaAlunosMedias; //desestruturando
        const indice = alunoss.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log('Aluno não encontrado');
    }
}
exibirInfos('Ana');

//--------------------------------------------------------
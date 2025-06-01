const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual eh a sua idade? '));

// const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if (idade >= 18) {
    console.log('Voce eh maior de idade!');
} else {
    console.log('Voce eh menor de idade.');
}

const mediaDoAluno = 4.9;

if (mediaDoAluno >= 7) {
    console.log('Aprovado!');
} else if (mediaDoAluno >= 5) {
    console.log('Prova final');
} else {
    console.log('Reprovado');
}


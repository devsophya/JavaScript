//Definicao da função
function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  //template string || template literals
  return `Olá, ${nomeDoEstudante}! Seja bem-vinda(o) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Sophya", "Back-end em Node.js");

console.log(mensagemDaSaudacao);

// Exemplo 2

console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

// -----------------------------------------------
//FUNÇÕES ANONIMAS

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);

// -----------------------------------------------
// ARROW FUNCTIONS

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;



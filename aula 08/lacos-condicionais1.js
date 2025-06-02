/*const prompt = require("readline-sync");

let saldo = Number(prompt.question("Qual eh o seu saldo?"));

while (saldo < 0) {
  saldo = Number(
    prompt.question("Saldo inválido! Por favor, informe novamente:")
  );
}

console.log(saldo);


//Exemplo 2

let notaDoAluno = Number(prompt.question('Informe a nota do aluno: '));

let somaDasNotas = 0; //Acumulador
let qtdNotasValidas = 0;

while (notaDoAluno >= 0 ) {
    somaDasNotas += notaDoAluno;
    qtdNotasValidas++;

    notaDoAluno = Number(prompt.question('Informe a proxima nota: '));
}

console.log(somaDasNotas);
console.log(qtdNotasValidas);

console.log("Media das notas dos alunos =", somaDasNotas / qtdNotasValidas);

//Exemplo 3

const numeroAleatorio = parseInt(Math.random() * 10);

let numeroDoUsuario = Number (prompt.question("Adivinhe o número (0 a 10): "));

console.log(numeroAleatorio);

while (numeroAleatorio !== numeroDoUsuario) {
  console.log('Você errou o número! Tente novamente...');
  numeroDoUsuario = Number(prompt.question("Adivinhe o número (0 a 10): "));
}

console.log("Parabéns! Você acertou! O número era:", numeroAleatorio);

// Loop com contador 

let contador = 0;

while (contador < 5) {
  console.log(contador);

  if (contador === 2) {
    break;
  }
  contador++;
}

*/

//DO WHILE 

let saldo;

do {
  saldo = Number(
    prompt.question(" Informe um saldo válido: ")
  );
} while (saldo < 0);

console.log(saldo); 
// FUNÇÕES DE ALTA ORDEM DE ARRAYS

// Array.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});

// 2. Array.prototype.find(): útil para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero < 20 && numero > 10;
});

console.log(encontrado);

const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "Pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "Pessoa 3",
    idade: 46,
    altura: 1.82,
  },
];

const pessoaEncontrada = pessoas.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);

console.clear();
console.log(pessoaEncontrada);


// 3. Array.prototype.findIndex() : muito parecido com o find(), porém retorna o indice do elemento encontrado

const indiceDaPessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade > 50 && pessoa.altura < 1.7
);

console.clear();
console.log(indiceDaPessoaEncontrada);


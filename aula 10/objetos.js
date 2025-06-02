// Object Literal

const array = ["Sophya", 20, 1.74, true];

const pessoa = {
  nome: "Sophya",
  idade: 20,
  altura: 1.74,
  ehProgramadora: true,
  hobbies: ["Ler", "Jogar", "Viajar"],
  imprimirAlgo: () => {
    console.log("Chamou a função!");
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Desenvolvedora";

pessoa.nome = "Sophya Damiazo";

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 20;
const altura = 1.74;

const objeto = {
    idade,
    altura,
}

console.log(objeto);
console.clear();

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);

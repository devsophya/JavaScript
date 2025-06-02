// Map
const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2;
});

console.log(novoArray);

// Exemplo 1 : Elevando todos os números ao quadrado
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);

// Exemplo 2 : Adicionando uma propriedade aos objetos do array
console.clear();

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "arroz", preco: 4.98, quantidade: 5 },
  { produto: "leite 1L", preco: 6.99, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);

/*
 const pessoa = {
  nome: "Sophya",
  idade: 20,
  altura: 1.74,
};

//Desestruturação ou spread operator

const pessoaComPeso = {
  ...pessoa,
  peso: 60,
};

console.log(pessoaComPeso);
*/

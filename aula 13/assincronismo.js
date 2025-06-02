const fs = require("fs");

// 1 Callbacks
/*
console.log("Antes da função de ler o arquivo...");

//Função assincrona (ler um arquivo leva um tempo)
fs.readFile("aula 13/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log("Depois da função de ler o arquivo...");
console.log(2);
console.log(3);
console.log(4);
console.log(5);

*/

//Exemplo 02: setTimeout (função que cria um timer)

console.log("Antes do setTimeout...");

setTimeout(() => {
  console.log("Isso aqui vai ser executado após 2 segundos!");
}, 2 * 1000);

console.log("Depois do setTimeout...");

// 2- Promises (promessas)

console.log("Antes da criação da promise...");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula 13/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

// Foco a partir daqui...
/*
lerArquivoPromise()
  .then((retornoDoResolveDaPromise) => {
    console.log("Deu certo:", retornoDoResolveDaPromise);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado, independente do sucesso ou fracasso da promise, no final dela."
    );
  });
*/

// 3 async/await

async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida.");

  try {
    const dadosDoArquivoLido = await lerArquivoPromise(); // Espera a promise ser resolvida para avançar no código

    console.log(dadosDoArquivoLido);
    console.log("Isso é executado depois da promise ser resolvida.");
  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promise (com erro).");
  } finally {
    console.log("Dentro do finally!");
  }
}

leituraDeDados();

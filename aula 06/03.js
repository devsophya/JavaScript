const prompt = require("readline-sync");

const idade = prompt.question("Qual eh a sua idade? ");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

console.log(Number("X"));
 

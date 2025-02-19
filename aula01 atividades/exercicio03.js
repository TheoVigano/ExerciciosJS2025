const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu salário: ", (salario) => {
    console.log(`Olá ${nome}! Seu salário é de R$${salario}`);

    rl.close();
  });
});

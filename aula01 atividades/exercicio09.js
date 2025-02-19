const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira a quantidade de dias trabalhados: ", (dias) => {
  let horas = parseInt(dias) * 8;
  let salario = horas * 25;

  console.log(
    `Esse funcinário trabalha ${horas}h no mês e ganha R$${salario} por mês. `
  );

  rl.close();
});

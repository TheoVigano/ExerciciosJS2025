const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um numero: ", (num1) => {
  rl.question("Digite outro numero: ", (num2) => {
    soma = parseInt(num1) + parseInt(num2);

    console.log(`A soma dos números é ${soma}`);

    rl.close();
  });
});

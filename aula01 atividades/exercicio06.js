const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um numero: ", (numero) => {
  let antecessor = parseInt(numero) - 1;
  let sucessor = parseInt(numero) + 1;
  console.log(
    `O antecessor do ${numero} é ${antecessor} e seu sucessor é ${sucessor}`
  );

  rl.close();
});

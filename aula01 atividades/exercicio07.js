const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu dinheiro: ", (real) => {
  let dolar = parseFloat(real) / 5.6;
  console.log(`Você pode comprar com R$${real} , $${dolar.toFixed(2)}`);

  rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu salário: ", (salario) => {
  let porcentagem = parseFloat(salario) * 0.15;
  let aumento = parseFloat(salario) + parseFloat(porcentagem);
  console.log(`Seu salário com o aumento de 15% ficou R$${aumento.toFixed(2)}`);

  rl.close();
});

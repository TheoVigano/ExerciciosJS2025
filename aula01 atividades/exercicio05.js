const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira nota: ", (nota1) => {
  rl.question("Digite a segunda nota: ", (nota2) => {
    let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    console.log(`A média do aluno(a) é ${media.toFixed(2)}`);

    rl.close();
  });
});

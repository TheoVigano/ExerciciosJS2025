const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira a altura: ", (altura) => {
  rl.question("Insira a largura: ", (largura) => {
    let area = parseFloat(altura) * parseFloat(largura);
    let tinta = area / 2;

    console.log(`A área é de ${area}m² e a tinta é necessário ${tinta}m² `);

    rl.close();
  });
});

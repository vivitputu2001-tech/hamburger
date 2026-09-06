const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter size: ", (size) => {
  const number = Number(size);

  console.log();

  for (let i = number; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }

  console.log();

  rl.close();
});
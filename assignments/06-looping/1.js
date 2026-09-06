const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter size: ", (size) => {
  const number = Number(size);

  console.log();

  for (let i = 0; i < number; i++) {
    let row = "";

    for (let j = 0; j < number; j++) {
      row += "*";
    }

    console.log(row);
  }

  console.log();

  rl.close();
});
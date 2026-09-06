const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter miles: ", (miles) => {
  const kilometers = Number(miles) * 1.60934;

  console.log();
  console.log(`${miles} miles is equal to ${kilometers} kilometers`);
  console.log();

  rl.close();
});
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (first) => {
  rl.question("Enter second number: ", (second) => {
    rl.question("Enter third number: ", (third) => {
      const average = (Number(first) + Number(second) + Number(third)) / 3;

      console.log();
      console.log(`The average of ${first}, ${second}, ${third} is ${average}`);
      console.log();

      rl.close();
    });
  });
});
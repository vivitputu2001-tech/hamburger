const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (first) => {
  rl.question("Enter second number: ", (second) => {
    rl.question(`What is ${first} + ${second}? `, (answer) => {
      const correctAnswer = Number(first) + Number(second);
      const isCorrect = Number(answer) === correctAnswer;

      console.log();
      console.log(`${first} + ${second} = ${answer} is ${isCorrect}`);
      console.log();

      rl.close();
    });
  });
});
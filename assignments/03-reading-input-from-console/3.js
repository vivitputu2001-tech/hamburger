const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter seconds: ", (seconds) => {
  const totalSeconds = Number(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  console.log();
  console.log(
    `${seconds} seconds is ${minutes} minutes and ${remainingSeconds} seconds`
  );
  console.log();

  rl.close();
});
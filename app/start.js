const version = './index.js';

const readline = require('readline');
const handleInput = require(version); // Import the handleInput function

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Enter command (add, print, find, delete, exit): ', (input) => {
    // Pass the input and numbers to the imported handleInput function
    handleInput(input);
    promptUser(); // Prompt for the next command
  });
}

console.log('Program started. Use "add <number>" to add a number, "print" to display all numbers, or "exit" to quit.');
promptUser();

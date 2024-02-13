let numbers = []

function handleInput(input) {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();
  
  switch (command) {
    case 'add':
      const numberToAdd = parseFloat(args[1]);
      if (!isNaN(numberToAdd)) {
        if (numbers.length >= 1) {
          numbers.push(numberToAdd);
          let total = 0;
          for (let index = 0; index < numbers.length; index++) {
            const num = numbers[index];
            total = total + num;
          }
          numbers.push(total)
        } else {
          numbers.push(numberToAdd);
        }
        console.log(`${numberToAdd} added to the array.`);
      } else {
        console.log('Please provide a valid number after "add".');
      }
      break;
    case 'print':
      console.log('Current numbers in the array:', numbers);
      break;
    case 'find':
      const numberToFind = parseFloat(args[1]);
      console.log(numberToFind)
      for (let index = 0; index < numbers.length; index++) {
        const num = numbers[index];
        if (numberToFind === num) {
          return index;
        } else {
          console.log('Not found')
        }
      }
      break;
    case 'exit':
      console.log('Exiting program.');
      process.exit(); // Terminate the program
      break;
    default:
      console.log('Unknown command. Use "add <number>", "print", or "exit".');
  }
}

module.exports = handleInput;
module.exports.getList = function() {
  return numbers
}

module.exports.reset = function() {
  numbers = []
  return numbers
}

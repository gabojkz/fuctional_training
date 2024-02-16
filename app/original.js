// This is not the orginal but the previous code from the immutability part
const numbers = []

function handleInput(input) {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();
  
  switch (command) {
    case 'add':
      const numberToAdd = parseFloat(args[1]);
      if (!isNaN(numberToAdd)) {

        numbers.push(numberToAdd);

        if (numbers.length > 1) {
          const clonedArray = [...numbers];
          const total = clonedArray.reduce((acc, num) => acc + num, 0);
          numbers.push(total);
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
      const foundIndex = numbers.findIndex((num) => num === numberToFind);
      if (foundIndex !== -1) {
        return foundIndex;
      } else {
        console.log('Not found');
      }
      break;
    case 'delete':
      var itemToRemove = parseFloat(args[1]);
      var index = numbers.indexOf(itemToRemove);
      if (index !== -1) {
          numbers.splice(index, 1);
          console.log(`Item '${itemToRemove}' removed from the array.`);
      } else {
          console.log(`Item '${itemToRemove}' not found in the array.`);
      }

      break;
    case 'exit':
      console.log('Exiting program.');
      process.exit();
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
  numbers.splice(0, numbers.length);
  return numbers
}

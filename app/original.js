var numbers = []

function handleInput(input) {
  var args = input.trim().split(' ');
  var command = args[0].toLowerCase();
  
  switch (command) {
    case 'add':
      var numberToAdd = parseFloat(args[1]);
      if (!isNaN(numberToAdd)) {
        if (numbers.length >= 1) {
          numbers.push(numberToAdd);
          var total = 0;
          for (var index = 0; index < numbers.length; index++) {
            var num = numbers[index];

            // BAD: reassign the variable total with a new value
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
      var numberToFind = parseFloat(args[1]);
      // BAD: mutating the index variable the numb variable each time it runs
      for (var index = 0; index < numbers.length; index++) {
        var num = numbers[index];
        if (numberToFind === num) {
          return index;
        } else {
          console.log('Not found')
        }
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
  numbers = []
  return numbers
}

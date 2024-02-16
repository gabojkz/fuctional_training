

function addNumber(numbers, numberToAdd) {
  if (isNaN(numberToAdd)) {
    return { numbers, message: 'Please provide a valid number after "add".' };
  }

  const clonedArray = [...numbers];
  clonedArray.push(numberToAdd)
  const total = clonedArray.reduce((acc, num) => acc + num, 0);
  const resultNumbers = clonedArray.length > 1 ? clonedArray.concat([total]) : clonedArray;

  return { numbers: resultNumbers, message: `${numberToAdd} added to the array.` };
}

function findNumberIndex(numbers, numberToFind) {
  const foundIndex = numbers.findIndex((num) => num === numberToFind);

  return foundIndex !== -1
    ? { index: foundIndex, message: '' }
    : { index: null, message: 'Not found' };
}

function deleteNumber(numbers, numberToDelete) {
  const indexOfItemToRemove = numbers.indexOf(numberToDelete);

  if (indexOfItemToRemove !== -1) {
    const resultNumbers = numbers.slice(0, indexOfItemToRemove).concat(numbers.slice(indexOfItemToRemove + 1));
    return { numbers: resultNumbers, message: `Item '${itemToRemove}' removed from the array.` };
  } else {
    return { numbers, message: `Item '${itemToRemove}' not found in the array.` };
  }
}


function handleInput(input, numbers) {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();
  
  switch (command) {
    case 'add':
      const numberToAdd = parseFloat(args[1]);
      return addNumber(numbers, numberToAdd);
    case 'print':
      console.log('Current numbers in the array:', numbers);
      break;
    case 'find':
      const findResult = findNumberIndex(numbers, numberToFind);
      if (findResult.index !== null) {
        console.log('Number found at index:', findResult.index);
      } else {
        console.log(findResult.message);
      }
      return findResult;
    case 'delete':
      const deleteResult = deleteNumber(numbers, itemToRemove);
      console.log(deleteResult.message);
      return deleteResult;
    case 'exit':
      console.log('Exiting program.');
      process.exit();
      break;
    default:
      console.log('Unknown command. Use "add <number>", "print", or "exit".');
  }
}

module.exports = handleInput;

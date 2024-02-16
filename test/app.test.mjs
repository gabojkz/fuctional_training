import { assert } from 'chai';

import handleInput from '../app/index.js';

describe('InputHandler', function() {
  beforeEach(function() {
    this.numbers = []
  })

  it('should add a number to the array', function() {
    const result = handleInput('add 5', this.numbers);
    assert.deepEqual(result.numbers, [5]);
  });

  it('should add two numbers and sum them', function() {
    const testInputs = ['add 5', 'add 5', 'add 5', 'add 10'];
    let expectedResults = [5, 5, 10, 5, 15, 10, 25];
  
    testInputs.forEach((input, index) => {
      const result = handleInput(input, this.numbers);
      this.numbers = [...result.numbers];
      assert.deepEqual(this.numbers, expectedResults.slice(0, index + 1));
    });
  })

  // it('should find a number in the array and return the index', function () {
  //   handleInput('add 5');
  //   assert.deepEqual(handleInput.getList(), [5]);
  //   handleInput('add 5');
  //   assert.deepEqual(handleInput.getList(), [5, 5, 10]);
  //   assert.deepEqual(handleInput('find 10'), 2);
  // })

  // it('should delete a number in the array', function () {
  //   handleInput('add 5');
  //   assert.deepEqual(handleInput.getList(), [5]);

  //   handleInput('delete 5')
  //   assert.deepEqual(handleInput.getList(), []);
  // })
});

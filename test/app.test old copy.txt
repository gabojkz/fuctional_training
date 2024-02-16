import { assert } from 'chai';

import handleInput from '../app/index.js';

describe('InputHandler', function() {
  beforeEach(function() {
    handleInput.reset()
  })

  it('should add a number to the array', function() {
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5]);
  });

  it('should add two numbers and sum them', function() {
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5]);
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5, 5, 10]);
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5, 5, 10, 5, 25]);
    handleInput('add 10');
    assert.deepEqual(handleInput.getList(), [5, 5, 10, 5, 25, 10, 60]);
  })

  it('should find a number in the array and return the index', function () {
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5]);
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5, 5, 10]);
    assert.deepEqual(handleInput('find 10'), 2);
  })

  it('should delete a number in the array', function () {
    handleInput('add 5');
    assert.deepEqual(handleInput.getList(), [5]);

    handleInput('delete 5')
    assert.deepEqual(handleInput.getList(), []);
  })
});

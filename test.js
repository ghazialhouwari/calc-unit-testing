const assert = require('assert');
const Operations = require('./operations');

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(Operations.add(1, 3), 4);
});

it('correctly calculates the difference between 3 and 1', () => {
    assert.equal(Operations.subtract(3, 1), 2);
});

it('correctly calculates the multiply of 10 and 3', () => {
    assert.equal(Operations.multiply(10, 3), 30);
});

it('correctly calculates the divide of 9 over 3', () => {
    assert.equal(Operations.divide(9, 3), 3);
});

it('Indicates failure when a string is used instead of a number', () => {
    assert.equal(Operations.validateNumbers('string', 3), false);
});

it('Indicates failure when two strings are used instead of a number', () => {
    assert.equal(Operations.validateNumbers('string', 'string'), false);
});

it('Successfully runs when two numbers are used', () => {
    assert.equal(Operations.validateNumbers(9, 3), true);
});


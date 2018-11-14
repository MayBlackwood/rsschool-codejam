const assert = require('assert');
const sumOfOther = require('./sumOfOther');
const make = require('./make');
const recursion = require('./recursion');


const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const mult = (a,b) => a * b;


const fullTree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};


describe('sumOfOther', () => {
  it('sum', () => {
    const resultSum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(resultSum, [8, 7, 6, 9]);
  });
});

describe('make', () => {
  it('make sum', () => {
    const resultMake = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(resultMake, 777);
  });

  it('make sub', () => {
    const resultMake = make(10)(2)(3)(sub);
    assert.deepEqual(resultMake, 5);
  });

  it('make mult', () => {
    const resultMake = make(3)(3)(3)(mult);
    assert.deepEqual(resultMake, 27);
  });
});

describe('recursion', () => {
  it('full binary tree', () => {
    const resultRecursion = recursion(fullTree);
    assert.deepEqual(resultRecursion, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});




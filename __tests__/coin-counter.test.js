import { coinCounter } from './../src/coin-counter.js';
import { findChange } from './../src/coin-counter.js';
import { findQuarters } from './../src/coin-counter.js';
import { findDimes } from './../src/coin-counter.js';
import { findNickels } from './../src/coin-counter.js';

describe ('coinCounter', () => {

  // test('should correctly calculate change needed', () => {
  //   const number = 4.99;
  //   expect(findChange(number)).toEqual(.01);
  // });

  test('should correctly calculate quarters needed to make change', () => {
    const number = 1;
    expect(findQuarters(number)).toEqual(4);
  });

  test('should correctly calculate quarters needed to make change', () => {
    const number = 1.25;
    expect(findQuarters(number)).toEqual(5);
  });

  test('should correctly calculate quarters needed to make change', () => {
    const number = 1.59;
    expect(findQuarters(number)).toEqual(6);
  });

  test('should correctly calculate dimes needed to make change', () => {
    const number = 1.59;
    expect(findDimes(number)).toEqual(15);
  });

  test('should correctly calculate nickels needed to make change', () => {
    const number = 1.59;
    expect(findNickels(number)).toEqual(31);
  });
});
import { coinCounter } from './../src/coin-counter.js';
import { findChange } from './../src/coin-counter.js';
import { findQuarters } from './../src/coin-counter.js';

describe ('coinCounter', () => {

  test('should correctly calculate change needed', () => {
    const number = 4.99;
    expect(findChange(number)).toEqual(.01);
  });

  test('should correctly calculate quarters needed to make change', () => {
    const number = 3.25;
    expect(findQuarters(number)).toEqual(3);
  });
});
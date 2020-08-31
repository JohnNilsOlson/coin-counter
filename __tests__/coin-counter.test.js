import { coinCounter } from './../src/coin-counter.js';
import { findQuarters } from './../src/coin-counter.js';
import { findDimes } from './../src/coin-counter.js';
import { findNickels } from './../src/coin-counter.js';
import { findPennies } from './../src/coin-counter.js';
import { recursiveCoinCounter } from './../src/coin-counter.js';

describe ('coinCounter', () => {

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

  test('should correctly calculate pennies needed to make change', () => {
    const number = 1.59;
    expect(findPennies(number)).toEqual(159);
  });

  // test('should correctly calculate change needed', () => {
  //   const number = 3.84;
  //   expect(coinCounter(number)).toEqual("15 Quarters, 1 Nickel and 4 Pennies");
  // });
  
  test('should correctly calculate change needed', () => {
    const number = 1.28;
    expect(recursiveCoinCounter(number)).toEqual([5,0,0,3]);
  });
  
});

//"15 Quarters, 1 Nickel and 4 Pennies"
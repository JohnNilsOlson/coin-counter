import { coinCounter } from './../src/coin-counter.js';

describe ('coinCounter', () => {

  test('should correctly calculate change needed', () => {
    const number = 4.99;
    expect(coinCounter(number).toEqual(.01));
  });
});
export const coinCounter = (coinToCountBy) => {
  return (amount) => {
    return Math.floor(amount/coinToCountBy);
  }
}

export const findQuarters = coinCounter(.25);
export const findDimes = coinCounter(.10);
export const findNickels = coinCounter(.05);
export const findPennies = coinCounter(.01);

export const closureCoinCounter = (amount) => {
  let coinArray = [];
  coinArray.push(findQuarters(amount));
  coinArray.push(findDimes((amount-coinArray[0] * .25 ).toFixed(2)));
  coinArray.push(findNickels((amount-coinArray[0] * .25 - coinArray[1] * .10).toFixed(2)));
  coinArray.push(findPennies((amount-coinArray[0] * .25 - coinArray[1] * .10 - coinArray[2] * .05).toFixed(2)));
  return coinArray;
}




export const recursiveCoinCounter = (number,counter=0,coinArray=[]) => {
  const coins=[.25, .10, .05, .01]

  //base
  if (counter >= 4) {
    return coinArray;


  } else {
    
    let change = Math.floor( number / coins[counter])
    let remainder = (number - change*coins[counter])
    coinArray.push(change);

    //recursion
    return recursiveCoinCounter(remainder, counter+1 ,coinArray);
  }
}


//number 1.10
//counter 0
//change = 1.10/.25 = 4
//remainder = (1.10 - 4*.25 ) = .10
//return number = 1.10 counter = 1, remainder = .10, change = 4


//coin array[4,0,0,0]

//second looop
//counter 1
//change = 


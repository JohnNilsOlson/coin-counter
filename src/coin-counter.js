export const coinCounter = (number) => {
  return findChange(number);
}

// export const findChange = (number) => {
//   return parseFloat((Math.round(number)-number).toFixed(2));
// }

export const findQuarters = (number) => {
  return Math.floor(number/.25);
}

export const findDimes = (number) => {
  return Math.floor(number / .10 )
}

export const findNickels = (number) => {
  return Math.floor(number / .05 )
}

const findPennies = () => {

}

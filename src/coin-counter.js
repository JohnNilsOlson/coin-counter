export const coinCounter = (number) => {
  return findChange(number);
}

// export const findChange = (number) => {
//   return parseFloat((Math.round(number)-number).toFixed(2));
// }

export const findQuarters = (number) => {
  return Math.floor(number/.25);
}

const findDimes = (number) => {
  return Math.floor(number / .10 )
}

const findNickels = () => {

}

const findPennies = () => {

}

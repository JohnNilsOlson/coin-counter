export const coinCounter = (number) => {
  return findChange(number);
}

export const findChange = (number) => {
  return parseFloat((Math.round(number)-number).toFixed(2));
}

export const findQuarters = () => {

}

const findDimes = () => {

}

const findNickels = () => {

}

const findPennies = () => {

}

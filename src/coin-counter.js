export const coinCounter = (number) => {
  return parseFloat((Math.round(number)-number).toFixed(2));
}

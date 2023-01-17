export default function priceEditor(price) {
  return price
    .toString()
    .split('')
    .reverse()
    .reduce((acc, char, i) => {
      if (i % 3 === 0) {
        return acc + ' ' + char
      }
      return acc + char
    }, 'Р ')
    .split('')
    .reverse()
    .join('')
}

// prettier-ignore
export const sortingTickets = (tickets, activeSort) => {
  const durationSum = (ticket) => ticket['segments'][0].duration + ticket['segments'][1].duration
  switch (activeSort) {
  case 'Самый дешевый':
    return tickets.sort((first, second) => first['price'] - second['price'])
  case 'Самый быстрый':
    return tickets.sort((first, second) => {
      return durationSum(first) - durationSum(second)
    })
  case 'Оптимальный':
    return tickets.sort((first, second) => {
      return first['price'] * durationSum(first) - second['price'] * durationSum(second)
    })
  default:
    return tickets
  }
}

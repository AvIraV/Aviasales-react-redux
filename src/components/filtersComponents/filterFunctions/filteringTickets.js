export const filteringTickets = (tickets, transfers) => {
  if (transfers[0].active) {
    return [...tickets]
  }
  let result = []
  transfers.slice(1).forEach((transfer) => {
    if (transfer.active) {
      result = [
        ...result,
        ...tickets.filter((ticket) => {
          let maxTransfer = Math.max(ticket['segments'][0].stops.length, ticket['segments'][1].stops.length)
          return transfer.label == maxTransfer
        }),
      ]
    }
  })
  return result
}

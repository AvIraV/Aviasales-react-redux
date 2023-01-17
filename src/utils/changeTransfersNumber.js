export default function changeTransfersNumber(stops) {
  if (stops.length === 0) {
    return 'Без пересадок'
  } else if (stops.length === 1) {
    return '1 пересадка'
  } else {
    return `${stops.length} пересадки`
  }
}

export default function destinationTime(date, time) {
  let dateOut = new Date(date)
  const outHours = dateOut.getHours()
  const outMinutes = dateOut.getMinutes()
  const inHours = new Date(dateOut.setHours(dateOut.getHours() + Math.ceil(time / 60))).getHours()
  const inMinutes = new Date(dateOut.setMinutes(dateOut.getMinutes() + time)).getMinutes()

  return `${outHours}:${outMinutes} - ${inHours}:${inMinutes}`
}

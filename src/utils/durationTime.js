export default function durationTime(min) {
  return Math.trunc(min / 60) + 'ч ' + (min % 60) + 'м'
}

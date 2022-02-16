export function computeMinutesAndSeconds(rawTimeInSeconds: number): {
  minutes: number
  seconds: string
} {
  const minutes = Math.floor(rawTimeInSeconds / 60)
  const secondsLeft = rawTimeInSeconds % 60
  const printableSeconds =
    secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft.toString()

  return { minutes, seconds: printableSeconds }
}

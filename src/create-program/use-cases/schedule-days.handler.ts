import { ScheduledDay } from '../entities/scheduled-day.entity'

export function scheduleWantedDays(
  prevScheduledDays: ScheduledDay[],
  dayIndex: number,
) {
  return prevScheduledDays.map((day, index) => {
    return index === dayIndex
      ? {
          ...day,
          isScheduled: !day.isScheduled,
        }
      : day
  })
}

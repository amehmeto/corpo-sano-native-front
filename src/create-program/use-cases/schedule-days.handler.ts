import { ScheduledDay } from '../entities/workout.entity'

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

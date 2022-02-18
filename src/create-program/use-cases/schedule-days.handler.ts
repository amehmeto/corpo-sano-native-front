import { ScheduledDays } from '../entities/workout.entity'

export function scheduleWantedDays(
  prevScheduledDays: ScheduledDays,
  dayIndex: number,
): ScheduledDays {
  return prevScheduledDays.map((day, index) => {
    return index === dayIndex
      ? {
          ...day,
          isScheduled: !day.isScheduled,
        }
      : day
  }) as ScheduledDays
}

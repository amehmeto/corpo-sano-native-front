import { Exercise } from './exercise.entity'

export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type ScheduledDay = { name: WeekDay; isScheduled: boolean }

export class Workout {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly programId: string,
    public readonly exercises: Exercise[],
    public readonly scheduledDays: ScheduledDay[],
  ) {
    if (!this.exercises) this.exercises = []
    if (this.scheduledDays === []) {
      this.scheduledDays = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ].map((day) => ({
        name: day as WeekDay,
        isScheduled: false,
      })) as ScheduledDay[]
    }
  }
}

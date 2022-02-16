import { Exercise } from './exercise.entity'

class WeekDays {}

export class Workout {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly programId: string,
    public readonly exercises?: Exercise[],
    public readonly scheduleDays?: WeekDays[],
  ) {
    if (!this.exercises) this.exercises = []
    if (!this.scheduleDays) this.scheduleDays = []
  }
}

import { Exercise } from './exercise.entity'

class WeekDays {}

export class Workout {
  public exercises: Exercise[]

  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly programId: string,
    public readonly scheduleDays?: WeekDays[],
  ) {
    this.exercises = []
  }
}

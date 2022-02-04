class WeekDays {}

export class Workout {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly programId: string,
    public readonly scheduleDays?: WeekDays[],
  ) {}
}

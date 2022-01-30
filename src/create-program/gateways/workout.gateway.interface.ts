import { ScheduledDay } from '../entities/scheduled-day.entity'
import { ExerciseTemplate } from '../entities/exercise-template.entity'

export interface WorkoutGateway {
  fillWithExercises(
    workoutId: string,
    exerciseTemplates: ExerciseTemplate[],
  ): Promise<boolean>
  scheduleDays(workoutId: string, days: ScheduledDay[]): Promise<boolean>
}

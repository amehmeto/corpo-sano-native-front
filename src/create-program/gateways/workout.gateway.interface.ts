import { ScheduledDay } from '../entities/scheduled-day.entity'
import { ExerciseTemplate } from '../entities/exercise-template.entity'

export interface WorkoutGateway {
  fillWorkoutWithExercises(
    workoutId: string,
    exerciseTemplates: ExerciseTemplate[],
  ): Promise<boolean>
  scheduleWorkout(workoutId: string, days: ScheduledDay[]): Promise<boolean>
}

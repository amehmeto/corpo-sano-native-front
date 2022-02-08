import { ScheduledDay } from '../entities/scheduled-day.entity'
import { ExerciseTemplate } from '../entities/exercise-template.entity'
import { WorkoutInput } from '../use-cases/create-workout.use-case'
import { Workout } from '../entities/workout.entity'

export interface WorkoutGateway {
  fillWithExercises(
    workoutId: string,
    exerciseTemplates: ExerciseTemplate[],
  ): Promise<boolean>
  scheduleDays(workoutId: string, days: ScheduledDay[]): Promise<boolean>
  create(workoutInput: WorkoutInput): Promise<Workout>
  findById(workoutId: string): Promise<Workout>
}

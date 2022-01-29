import { ScheduledDay } from '../entities/scheduled-day.entity'
import { ExerciseTemplate } from '../entities/exercise-template.entity'
import { WorkoutGateway } from '../gateways/workout.gateway.interface'

export class SaveWorkoutEditUseCase {
  constructor(private readonly workoutGateway: WorkoutGateway) {}

  async execute(
    workoutId: string,
    exercises: ExerciseTemplate[],
    scheduledDays: ScheduledDay[],
  ): Promise<void> {
    await this.workoutGateway.scheduleWorkout(workoutId, scheduledDays)
    await this.workoutGateway.fillWorkoutWithExercises(workoutId, exercises)
  }
}

import { WorkoutGateway } from '../gateways/workout.gateway.interface'
import { Workout } from '../entities/workout.entity'

export type WorkoutInput = {
  title: string
  description: string
  programId: string
}

export class CreateWorkoutUseCase {
  constructor(private readonly workoutGateway: WorkoutGateway) {}

  async execute(workoutInput: WorkoutInput): Promise<Workout> {
    return this.workoutGateway.create(workoutInput)
  }
}

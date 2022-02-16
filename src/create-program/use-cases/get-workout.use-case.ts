import { WorkoutGateway } from '../gateways/workout.gateway.interface'

export class GetWorkoutUseCase {
  constructor(private readonly workoutGateway: WorkoutGateway) {}

  async execute(workoutId: string): Promise<any> {
    return this.workoutGateway.findById(workoutId)
  }
}

import { Exercise } from '../entities/exercise.entity'
import { ExerciseGateway } from '../gateways/exercise.gateway.interface'

export class GetExerciseUseCase {
  constructor(private exerciseGateway: ExerciseGateway) {}

  execute(exerciseId: string): Promise<Exercise> {
    return this.exerciseGateway.findById(exerciseId)
  }
}

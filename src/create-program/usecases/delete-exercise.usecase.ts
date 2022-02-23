import { ExerciseGateway } from '../gateways/exercise.gateway.interface'

export class DeleteExerciseUseCase {
  constructor(private readonly exerciseGateway: ExerciseGateway) {}

  execute(exerciseId: string): boolean {
    return this.exerciseGateway.deleteExercise(exerciseId)
  }
}

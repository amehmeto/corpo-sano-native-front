import { ExerciseGateway } from './exercise.gateway.interface'
import { Exercise } from '../entities/exercise.entity'

export class GraphqlExerciseGateway implements ExerciseGateway {
  deleteExercise(exerciseId: string): Promise<boolean> {
    return Promise.resolve(false)
  }

  findById(exerciseId: string): Promise<Exercise | undefined> {
    return Promise.resolve(undefined)
  }
}

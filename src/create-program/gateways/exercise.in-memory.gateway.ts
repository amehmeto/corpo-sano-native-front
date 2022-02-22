import { ExerciseGateway } from './exercise.gateway.interface'
import { Exercise } from '../entities/exercise.entity'
import { exerciseDataBuilder } from '../../_data-builders/exercise.data-builder'

export class InMemoryExerciseGateway implements ExerciseGateway {
  private rawExercise = exerciseDataBuilder()
  private exercises = [
    new Exercise(
      this.rawExercise.id,
      this.rawExercise.template,
      this.rawExercise.numberOfSets,
      this.rawExercise.numberOfReps,
      {minutes: 2, seconds: "20"},
      {minutes: 2, seconds: "20"},)
  ]

  findById(exerciseId: string): Promise<Exercise> {
    return Promise.resolve(this.exercises[0])
  }
}
import { ExerciseGateway } from './exercise.gateway.interface'
import { Exercise } from '../entities/exercise.entity'
import { GraphQLGateway } from '../../_infrastructure/gateway/base.graphql.gateway'

export class GraphqlExerciseGateway
  extends GraphQLGateway
  implements ExerciseGateway
{
  deleteExercise(exerciseId: string): Promise<boolean> {
    return Promise.resolve(false)
  }

  async findById(exerciseId: string): Promise<Exercise | undefined> {
    const getExerciseQuery = {
      query: `query GetExercise($exerciseId: ID!) {
        getExercise(exerciseId: $exerciseId) {
          id
          workout {
            id
          }
          template {
            id
            title
          }
          numberOfSets
        }
      }`,
      variables: {
        exerciseId,
      },
    }

    console.log('WESH MAGHLE')
    const { getExercise } = await this.request(getExerciseQuery)
    console.log('WESH ERKAM')
    return getExercise
  }
}

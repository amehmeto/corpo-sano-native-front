import { exerciseGateway, initializeTokenCheatCode } from '../../_infrastructure/dependency-injection.container'
import { ExerciseGraphqlGateway } from './exercise.graphql.gateway'
import { Exercise } from '../entities/exercise.entity'

describe('Exercise Gateway', () => {
  let exerciseGateway: ExerciseGraphqlGateway

  beforeAll(async () => {
    await initializeTokenCheatCode()
    exerciseGateway = new ExerciseGraphqlGateway()
  })

  it('should delete exercise', async () => {
    const exerciseId = '055ef1bd-a336-483b-8156-3d95541be909'

    const retrievedResult = await exerciseGateway.deleteExercise(exerciseId)

    expect(retrievedResult).toBeTruthy()
  })

  it('should get exercise with id', async () => {
    const exerciseId = '131f2162-2d58-46f3-b941-6881f00d913a'
    const expectedExercise = expect.any(Exercise)

    const retrievedExercise = await exerciseGateway.findById(exerciseId)

    expect(retrievedExercise).toStrictEqual(expectedExercise)
  })
})

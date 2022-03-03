const path = require('path')
import { ExerciseGateway } from './exercise.gateway.interface'
import { Exercise } from '../entities/exercise.entity'
import { GraphqlExerciseGateway } from './graphqlExerciseGateway'
import { Pact } from '@pact-foundation/pact'

describe('Exercise Gateway', () => {
  let exerciseGateway: ExerciseGateway
  const pactProvider = new Pact({
    consumer: 'ExerciseGateway',
    provider: 'NestJs',
    port: 1234,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'info',
  })

  const expectedBody = { id: 'whatever' }

  beforeAll(async () => {
    /*    pactProvider.setup().then(() =>
      pactProvider.addInteraction(new Pact.GraphQLInteraction()),
      )*/

    exerciseGateway = new GraphqlExerciseGateway()
  })

  it('should find exercise by id', async () => {
    const exerciseId = 'erkam id'
    const expectedExercise = expect.any(Exercise)

    const retrievedExercise = await exerciseGateway.findById(exerciseId)

    expect(retrievedExercise).toStrictEqual(expectedExercise)
  })
})

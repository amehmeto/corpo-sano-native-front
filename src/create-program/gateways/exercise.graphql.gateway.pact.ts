import { pactProvider } from '../../../.pact/setup'

const path = require('path')
import { ExerciseGateway } from './exercise.gateway.interface'
import { Exercise } from '../entities/exercise.entity'
import { GraphqlExerciseGateway } from './graphqlExerciseGateway'
import { GraphQLInteraction, Matchers, Pact } from '@pact-foundation/pact'

describe('Exercise Gateway', () => {
  let exerciseGateway: ExerciseGateway

  const expectedBody = { id: 'whatever' }

  beforeAll((done) => {
    const contentTypeJsonMatcher = Matchers.term({
      matcher: 'application\\/json; *charset=utf-8',
      generate: 'application/json; charset=utf-8',
    })

    pactProvider
      .setup()
      .then(() =>
        pactProvider.addInteraction(
          new GraphQLInteraction()
            .uponReceiving('a findById query')
            .withRequest({
              path: 'graphql',
              method: 'POST',
            })
            .withOperation('')
            .withQuery(`query qrqafsgl sdfg`)
            .withVariables({})
            .willRespondWith({
              status: 200,
              headers: {
                'Content-Type': contentTypeJsonMatcher,
              },
              body: {
                data: {},
              },
            }),
        ),
      )
      .then(() => done())

    exerciseGateway = new GraphqlExerciseGateway()
  })

  it('should find exercise by id', async () => {
    const exerciseId = 'erkam id'
    const expectedExercise = expect.any(Exercise)

    const retrievedExercise = await exerciseGateway.findById(exerciseId)

    expect(retrievedExercise).toStrictEqual(expectedExercise)
  })
})

import { ExerciseGateway } from './exercise.gateway.interface'
import { Exercise } from '../entities/exercise.entity'
import { GraphqlExerciseGateway } from './graphqlExerciseGateway'
import { GraphQLInteraction, Matchers, Pact } from '@pact-foundation/pact'
import path from 'path'
import { faker } from '@faker-js/faker'

describe('Exercise Gateway', () => {
  let exerciseGateway: ExerciseGateway

  const provider = new Pact({
    cors: true,
    port: 3005,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    logLevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'hero-consumer',
    provider: 'hero-provider',
    host: '127.0.0.1',
  })

  beforeAll((done) => {
    const contentTypeJsonMatcher = Matchers.term({
      matcher: 'application\\/json; *charset=utf-8',
      generate: 'application/json; charset=utf-8',
    })

    provider
      .setup()
      .then(() =>
        provider.addInteraction(
          new GraphQLInteraction()
            .uponReceiving('a findById query')
            .withRequest({
              path: 'graphql',
              method: 'POST',
            })
            .withOperation('GetExercise')
            .withQuery(
              `query GetExercise($exerciseId: ID!) {
          getExercise(exerciseId: $exerciseId) {
            id
            template {
              id
              title
            }
            numberOfSets
            workout {
              id
              title
            }
          }
        }`,
            )
            .withVariables({
              exerciseId: '42',
            })
            .willRespondWith({
              status: 200,
              headers: {
                'Content-Type': contentTypeJsonMatcher,
              },
              body: {
                data: {
                  id: '42',
                  numberOfSets: 0,
                  template: {},
                  workout: {},
                },
              },
            }),
        ),
      )
      .then(() => done())

    exerciseGateway = new GraphqlExerciseGateway()
  })

  afterAll((done) => {
    provider.finalize().then(() => done())
  })

  it('should find exercise by id', async () => {
    const exerciseId = '42'
    const expectedExercise = expect.any(Exercise)

    const retrievedExercise = await exerciseGateway.findById(exerciseId)
    console.log(retrievedExercise)

    expect(retrievedExercise).toStrictEqual(expectedExercise)

    await provider.verify()
  })
})

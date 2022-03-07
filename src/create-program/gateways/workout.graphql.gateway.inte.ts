import { Workout } from '../entities/workout.entity'
import { GraphQLWorkoutGateway } from './workout.graphql.gateway'
import { initializeTokenCheatCode } from '../../_infrastructure/dependency-injection.container'

describe('Workout Gateway', () => {
  let workoutGateway: GraphQLWorkoutGateway

  beforeAll(async () => {
    await initializeTokenCheatCode()
    workoutGateway = new GraphQLWorkoutGateway()
  })

  it('should get workout with id', async () => {
    const workoutId = '06f7445d-ec29-4e81-bbdd-ce11897fb65d'
    const expectedWorkout = expect.any(Workout)

    const retrievedWorkout = await workoutGateway.findById(workoutId)

    expect(retrievedWorkout).toStrictEqual(expectedWorkout)
  })

  it('should update workout', async () => {
    const workoutId = '0792c9f7-33b3-4975-b901-1cc588770f88'
    const workout = expect.any(Workout)
    const expectedWorkout = expect.any(Boolean)

    const retrievedWorkout = await workoutGateway.update(workoutId, workout)

    expect(retrievedWorkout).toStrictEqual(expectedWorkout)
  })
})
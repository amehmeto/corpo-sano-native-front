import { Workout } from '../entities/workout.entity'
import { GraphQLWorkoutGateway } from './workout.graphql.gateway'
import { initializeTokenCheatCode } from '../../_infrastructure/dependency-injection.container'

describe('Workout Gateway',  () => {
  let workoutGateway: GraphQLWorkoutGateway

  beforeAll(async () => {
    await initializeTokenCheatCode()
    workoutGateway = new GraphQLWorkoutGateway()
  })

  it('should get workout with id', async () => {
    const workoutId = "06f7445d-ec29-4e81-bbdd-ce11897fb65d"
    const expectedWorkout = expect.any(Workout)

    const retrievedWorkout = await workoutGateway.findById(workoutId)

    expect(retrievedWorkout).toStrictEqual(expectedWorkout)
  })
})
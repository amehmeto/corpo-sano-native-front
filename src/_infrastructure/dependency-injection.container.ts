import { InMemoryProgramGateway } from '../create-program/gateways/program.in-memory.gateway'
import { ProgramGateway } from '../create-program/gateways/program.gateway.interface'
import { WorkoutGateway } from '../create-program/gateways/workout.gateway.interface'
import { InMemoryWorkoutGateway } from '../create-program/gateways/workout.in-memory.gateway'

export const programGateway: ProgramGateway = new InMemoryProgramGateway()
export const workoutGateway: WorkoutGateway = new InMemoryWorkoutGateway(
  programGateway,
)

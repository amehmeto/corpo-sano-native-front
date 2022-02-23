import { ProgramGateway } from '../gateways/program.gateway.interface'
import { Program } from '../entities/program.entity'

export type WorkoutInput = {
  title: string
  description: string
  programId: string
}

export class CreateWorkoutUsecase {
  constructor(private readonly programGateway: ProgramGateway) {}

  async execute(
    programId: string,
    workoutInput: WorkoutInput,
  ): Promise<Program> {
    return this.programGateway.addWorkout(programId, workoutInput)
  }
}

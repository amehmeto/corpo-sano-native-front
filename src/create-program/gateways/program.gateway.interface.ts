import { Program } from '../entities/program.entity'
import { ProgramInput } from '../use-cases/create-program.use-case'
import { WorkoutInput } from '../use-cases/create-workout.use-case'

export interface ProgramGateway {
  create(programInput: ProgramInput): Promise<Program>
  findById(programId: string): Promise<Program | undefined>
  addWorkout(programId: string, workoutInput: WorkoutInput): Promise<Program>
}

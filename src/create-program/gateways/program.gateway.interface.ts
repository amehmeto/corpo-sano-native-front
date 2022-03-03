import { Program } from '../entities/program.entity'
import { ProgramInput } from '../usecases/create-program-use.case'
import { WorkoutInput } from '../usecases/create-workout.usecase'

export interface ProgramGateway {
  create(programInput: ProgramInput): Promise<Program>
  find(): Promise<Program[]>
  findById(programId: string): Promise<Program | undefined>
  addWorkout(programId: string, workoutInput: WorkoutInput): Promise<Program>
  deleteWorkout(programId: string, workoutId: string): Promise<boolean>
}

import { Program } from '../entities/program.entity'
import { ProgramInput } from '../use-cases/create-program.use-case'

export interface ProgramGateway {
  create(programInput: ProgramInput): Promise<Program>
  findById(programId: string): Promise<Program | undefined>
}

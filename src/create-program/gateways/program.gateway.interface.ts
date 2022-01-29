import { Program } from '../entities/program.entity'

export interface CreateProgramGateway {
  createProgram(programInput: Program): Promise<Program>
}

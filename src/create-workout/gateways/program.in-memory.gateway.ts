import { CreateProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'

export class InMemoryProgramGateway implements CreateProgramGateway {
  createProgram(programInput: Program): Promise<Program> {
    //const { title, description } = programInput
    return Promise.resolve(programInput)
  }
}

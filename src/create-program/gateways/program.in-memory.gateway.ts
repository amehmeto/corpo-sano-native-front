import { ProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'
import { programDataBuilder } from '../../_data-builders/program.data-builder'

export class InMemoryProgramGateway implements ProgramGateway {
  private rawPrograms = [programDataBuilder()]
  private programs = this.rawPrograms.map(
    (rawProgram) =>
      new Program(rawProgram.id, rawProgram.title, rawProgram.description),
  )

  create(programInput: Program): Promise<Program> {
    return Promise.resolve(this.programs[0])
  }
}

import { ProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'
import { programDataBuilder } from '../../_data-builders/program.data-builder'
import { v4 as uuid } from 'uuid'

export class InMemoryProgramGateway implements ProgramGateway {
  private rawPrograms = [programDataBuilder()]
  private programs = this.rawPrograms.map(
    (rawProgram) =>
      new Program(
        rawProgram.id,
        rawProgram.title,
        rawProgram.description,
        rawProgram.workouts,
      ),
  )

  constructor() {
    console.warn('InMemoryProgramGateway called', this.programs)
  }

  create(programInput: Program): Promise<Program> {
    const newId = uuid()
    this.programs.push({
      ...programInput,
      id: newId,
    })
    const createdProgram = this.programs.find((program) => program.id === newId)
    if (!createdProgram) throw new Error('Program not created')
    return Promise.resolve(createdProgram)
  }

  findById(programId: string): Promise<Program | undefined> {
    const program = this.programs.find((_program) => _program.id === programId)
    return Promise.resolve(program)
  }
}

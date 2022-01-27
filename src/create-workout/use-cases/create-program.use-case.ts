import { Program as ProgramEntity } from '../entities/program.entity'
import { CreateProgramGateway } from '../gateways/program.gateway.interface'

export class CreateProgramUseCase {
  constructor(private readonly createProgramGateway: CreateProgramGateway) {}

  async execute(program: ProgramEntity): Promise<ProgramEntity> {
    return this.createProgramGateway.createProgram(program)
  }
}

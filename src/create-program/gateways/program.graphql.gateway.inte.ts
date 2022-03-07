import { ProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'
import { GraphQLProgramGateway } from './program.graphql.gateway'
import { initializeTokenCheatCode } from '../../_infrastructure/dependency-injection.container'

describe('Program Gateway', () => {
  let programGateway: ProgramGateway

  beforeAll(async () => {
    await initializeTokenCheatCode()
    programGateway = new GraphQLProgramGateway()
  })

  it('should create a program',async () => {
    const programInput = {title: '3 weeks body', description: 'Less Fat'}
    const expectedProgram = expect.any(Program)

    const createdProgram = await programGateway.create(programInput)

    expect(createdProgram).toStrictEqual(expectedProgram)
  })
})
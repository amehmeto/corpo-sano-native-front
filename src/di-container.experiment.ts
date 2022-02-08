import { InMemoryProgramGateway } from './create-program/gateways/program.in-memory.gateway'
import { ProgramGateway } from './create-program/gateways/program.gateway.interface'

export const programGateway: ProgramGateway = new InMemoryProgramGateway()

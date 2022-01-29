import { CreateProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'
import { GraphQLGateway } from '../../_infrastructure/gateway/base.graphql.gateway'

export class GraphQLProgramGateway
  extends GraphQLGateway
  implements CreateProgramGateway
{
  createProgram(programInput: Program): Promise<Program> {
    return Promise.resolve(programInput)
  }
}

import { CreateProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'
import { GraphQLGateway } from '../../_infrastructure/gateway/base.graphql.gateway'

export class GraphQLProgramGateway
  extends GraphQLGateway
  implements CreateProgramGateway
{
  async createProgram(programInput: Program): Promise<Program> {
    try {
      const CREATE_PROGRAM_MUTATION = `mutation
        createProgram($title: String!) {
          createProgram(title: $title) {
            id,
            title
          }
        }
      `
      const createProgramMutationPayload = {
        query: CREATE_PROGRAM_MUTATION,
        variables: {
          title: programInput.title,
        },
      }

      const { createProgram } = await this.request(createProgramMutationPayload)
      return createProgram
    } catch (e) {
      throw this.handleError(e)
    }
  }
}

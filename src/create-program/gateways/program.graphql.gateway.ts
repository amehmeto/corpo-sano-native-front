import { ProgramGateway } from './program.gateway.interface'
import { Program } from '../entities/program.entity'
import { GraphQLGateway } from '../../_infrastructure/gateway/base.graphql.gateway'
import { WorkoutInput } from '../use-cases/create-workout.use-case'

export class GraphQLProgramGateway
  extends GraphQLGateway
  implements ProgramGateway
{
  async create(programInput: Program): Promise<Program> {
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

  addWorkout(programId: string, workoutInput: WorkoutInput): Promise<Program> {
    throw new Error('Method not implemented.')
  }

  deleteWorkout(programId: string, workoutId: string): Promise<boolean> {
    return Promise.resolve(false)
  }

  find(): Promise<Program[]> {
    return Promise.resolve([])
  }

  findById(programId: string): Promise<Program | undefined> {
    return Promise.resolve(undefined)
  }
}

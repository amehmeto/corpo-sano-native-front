import { AthleteGateway } from './athlete.gateway.interface'
import { Athlete } from '../entities/athlete.entity'
import { GraphQLGateway } from '../../_infrastructure/gateway/base.graphql.gateway'
import { Biometrics } from '../entities/biometrics.entity'

function mapToDomain(getAthlete: any) {
  const rawBiometrics = getAthlete.biometrics
  const mappedBiometrics = new Biometrics(
    rawBiometrics.bodyFat,
    rawBiometrics.height,
    rawBiometrics.weight,
    rawBiometrics.lengthUnit,
    rawBiometrics.weightUnit,
    rawBiometrics.gender,
    rawBiometrics.birthday,
    rawBiometrics.weightGoal,
  )
  return new Athlete(
    getAthlete.id,
    getAthlete.name,
    getAthlete.email,
    getAthlete.password,
    getAthlete.avatar,
    mappedBiometrics,
    getAthlete.dailyTasks,
    getAthlete.programs,
  )
}

export class GraphQLAthleteGateway
  extends GraphQLGateway
  implements AthleteGateway
{
  findAll(): Promise<any[]> {
    return Promise.resolve([])
  }

  async findById(athleteId: string): Promise<Athlete> {
    try {
      const getAthleteQuery = `query GetAthlete($athleteId: ID!){
        getAthlete(athleteId: $athleteId) {
          id
          name
          email
          password
          biometrics {
            id
            height
            bodyFat
            lengthUnit
            weight
            weightUnit
            gender
            birthday
            weightGoal
          }
        }
      }`
      const getAthleteQueryPayload = {
        query: getAthleteQuery,
        variables: {
          athleteId,
        },
      }

      const { getAthlete } = await this.request(getAthleteQueryPayload)
      console.log(getAthlete)
      return mapToDomain(getAthlete)
    } catch (e) {
      throw this.handleError(e)
    }
  }
}

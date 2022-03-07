import { AthleteGateway } from './athlete.gateway.interface'
import { GraphQLAthleteGateway } from './athlete.graphql.gateway'
import { initializeTokenCheatCode } from '../../_infrastructure/dependency-injection.container'
import { athleteDataBuilder } from '../../_data-builders/athlete-data.builder'
import { Athlete } from '../entities/athlete.entity'
import { Biometrics } from '../entities/biometrics.entity'
import { biometricsDataBuilder } from '../../_data-builders/biometrics.data-builder'

describe('Athlete Gateway', () => {
  let athleteGateway: AthleteGateway
  let rawAthleteData = athleteDataBuilder({
    biometrics: biometricsDataBuilder({
      weightUnit: 'kg',
      gender: 'FEMALE',
      weightGoal: 'SLOW_GAIN',
    }),
  })

  beforeAll(async () => {
    jest.mock('axios', () => {
      return {
        post: jest.fn().mockResolvedValue({
          data: rawAthleteData,
        }),
      }
    })
    await initializeTokenCheatCode()
    athleteGateway = new GraphQLAthleteGateway()
  })

  it('should find an athlete by id', async () => {
    const athleteId = 'ebc67027-7632-4966-ae59-390dba136a6c'
    const expectedMappedAthlete = new Athlete(
      athleteId,
      rawAthleteData.name,
      rawAthleteData.email,
      rawAthleteData.password,
      rawAthleteData.avatar,
      new Biometrics(
        rawAthleteData.biometrics.bodyFat,
        rawAthleteData.biometrics.height,
        rawAthleteData.biometrics.weight,
        rawAthleteData.biometrics.lengthUnit,
        rawAthleteData.biometrics.weightUnit,
        rawAthleteData.biometrics.gender,
        expect.any(Date),
        rawAthleteData.biometrics.weightGoal,
      ),
    )

    const retrievedAthlete = await athleteGateway.findById(athleteId)

    console.log(retrievedAthlete)
    expect(retrievedAthlete).toStrictEqual(expectedMappedAthlete)
  })
})

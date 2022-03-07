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
    await initializeTokenCheatCode()
    athleteGateway = new GraphQLAthleteGateway()
  })

  it('should find an athlete by id', async () => {
    const athleteId = 'ebc67027-7632-4966-ae59-390dba136a6c'
    const expectedMappedAthlete = expect.any(Athlete)

    const retrievedAthlete = await athleteGateway.findById(athleteId)

    expect(retrievedAthlete).toStrictEqual(expectedMappedAthlete)
  })
})

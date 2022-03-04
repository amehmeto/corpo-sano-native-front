import { AthleteGateway } from './athlete.gateway.interface'
import { GraphQLAthleteGateway } from './athlete.graphql.gateway'
import { Athlete } from '../entities/athlete.entity'
import { initializeTokenCheatCode } from '../../_infrastructure/dependency-injection.container'

describe('Athlete Gateway', () => {
  let athleteGateway: AthleteGateway

  beforeAll(async () => {
    await initializeTokenCheatCode()
    athleteGateway = new GraphQLAthleteGateway()
  })

  it('should find an athlete by id', async () => {
    const athleteId = 'ebc67027-7632-4966-ae59-390dba136a6c'
    const expectedAthlete = expect.any(Athlete)

    const retrievedAthlete = await athleteGateway.findById(athleteId)

    expect(retrievedAthlete).toStrictEqual(expectedAthlete)
  })
})

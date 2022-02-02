import { AthleteGateway } from '../gateways/athlete.gateway.interface'
import { Athlete } from '../entities/athlete.entity'
import { Biometrics } from '../entities/biometrics.entity'

export class GetAthleteUseCase {
  constructor(private readonly athleteGateway: AthleteGateway) {}

  async execute(athleteId: string) {
    const rawAthlete = await this.athleteGateway.findById(athleteId)
    return new Athlete(
      rawAthlete.id,
      rawAthlete.name,
      rawAthlete.email,
      rawAthlete.password,
      rawAthlete.avatar,
      rawAthlete.biometrics as Biometrics,
      rawAthlete.dailyTasks,
    )
  }
}

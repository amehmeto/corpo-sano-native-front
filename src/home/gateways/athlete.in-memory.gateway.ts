import { AthleteGateway } from './athlete.gateway.interface'
import { athleteDataBuilder } from '../data-builders/athlete-data.builder'
import { Athlete } from '../entities/athlete.entity'

export class InMemoryAthleteGateway implements AthleteGateway {
  private athletes = [athleteDataBuilder()]

  getById(athleteId: string): Promise<Athlete> {
    return Promise.resolve(this.athletes[0])
  }
}

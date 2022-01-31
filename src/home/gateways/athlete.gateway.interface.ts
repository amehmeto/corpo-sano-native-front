import { Athlete } from '../entities/athlete.entity'

export interface AthleteGateway {
  getById(athleteId: string): Promise<Athlete>
}

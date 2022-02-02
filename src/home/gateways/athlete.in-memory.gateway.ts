import { AthleteGateway } from './athlete.gateway.interface'
import { athleteDataBuilder } from '../data-builders/athlete-data.builder'
import { Athlete } from '../entities/athlete.entity'
import { Routes } from '../../router/Router'

type DAOAthlete = {
  biometrics: {
    birthday: Date
    bodyFat: number
    gender: string
    weightGoal: string
    lengthUnit: string
    weight: number
    height: number
    weightUnit: string
  }
  password: string
  dailyTasks: { route: Routes; description: string; id: string }[]
  name: string
  id: string
  avatar: string
  email: string
}

export class InMemoryAthleteGateway implements AthleteGateway {
  private athletes = [
    athleteDataBuilder(),
    athleteDataBuilder(),
    athleteDataBuilder(),
  ]

  findAll(): Promise<any[]> {
    return Promise.resolve(this.athletes)
  }

  findById(athleteId: string): Promise<DAOAthlete> {
    console.log('called with id ' + athleteId)
    return Promise.resolve(this.athletes[0])
  }

  delete(athleteId: string): Promise<void> {
    const foundIndex = this.athletes.findIndex(
      (athlete) => athlete.id === athleteId,
    )
    this.athletes.splice(foundIndex, 1)
    return Promise.resolve()
  }
}

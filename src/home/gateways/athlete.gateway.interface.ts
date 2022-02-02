import { Athlete } from '../entities/athlete.entity'
import { Routes } from '../../router/Router'

export interface AthleteGateway {
  findById(
    athleteId: string,
  ): Promise<{
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
  }>
  findAll(): Promise<any[]>
}

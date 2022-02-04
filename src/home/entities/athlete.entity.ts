import { Program } from '../../create-program/entities/program.entity'
import { DailyTask } from './daily-task.entity'
import { Biometrics } from './biometrics.entity'
import { UnitSystem } from '../../_data-builders/types/metric-system.enum'

export class Athlete {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly avatar: string,
    public readonly biometrics: Biometrics,
    public readonly dailyTasks?: DailyTask[],
    public readonly programs?: Program[],
  ) {
    this.setWeightUnitMetric(biometrics.weightUnit)
    this.setBodyFat(biometrics.bodyFat)
  }

  private setWeightUnitMetric(weightUnit: string) {
    this.biometrics.weightUnit = weightUnit === UnitSystem.METRIC ? 'kg' : 'lbs'
  }

  private setBodyFat(bodyFat: number) {
    this.biometrics.bodyFat = bodyFat / 10
  }
}

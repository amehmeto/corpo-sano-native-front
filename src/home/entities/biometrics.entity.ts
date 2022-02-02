import { UnitSystem } from '../types/metric-system.enum'
import { Gender } from '../types/gender.enum'
import { WeightGoal } from '../types/weight-goal.enum'

export class Biometrics {
  constructor(
    public bodyFat: number,
    public readonly height: number,
    public readonly weight: number,
    public readonly lengthUnit: UnitSystem,
    public weightUnit: 'kg' | 'lbs',
    public readonly gender: Gender,
    public readonly birthday: Date,
    public readonly weightGoal: WeightGoal,
  ) {}
}

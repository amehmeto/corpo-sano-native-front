import { Program } from '../../create-program/entities/program.entity'
import { Routes } from '../../router/Router'

class Biometrics {}

class DailyTask {
  constructor(
    public readonly id: string,
    public readonly description: string,
    public readonly route: Routes,
  ) {}
}

export class Athlete {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly biometrics: Biometrics,
    public readonly dailyTasks?: DailyTask[],
    public readonly programs?: Program[],
  ) {}
}

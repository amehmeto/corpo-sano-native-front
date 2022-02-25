import { Routes } from '../../routers/Router'

export class DailyTask {
  constructor(
    public readonly id: string,
    public readonly description: string,
    public readonly route: Routes,
  ) {}
}

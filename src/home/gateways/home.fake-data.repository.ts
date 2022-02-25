import { Routes } from '../../routers/Router'
import { v4 as uuid } from 'uuid'
import { dailyTaskDataBuilder } from '../../_data-builders/daily-tasks.data-builder'

export type DailyTask = {
  id: string
  description: string
  route: Routes
}

export const dailyTasksFakeData: DailyTask[] = [
  dailyTaskDataBuilder(),
  {
    id: uuid(),
    description: 'Start your Upper Body workout',
    route: 'WorkoutPreview' as Routes,
  },
  {
    id: uuid(),
    description: 'Create your first program',
    route: 'Home' as Routes,
  },
]

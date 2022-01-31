import { Routes } from '../../router/Router'
import { v4 as uuid } from 'uuid'

export type DailyTask = {
  id: string
  description: string
  route: Routes
}

export const dailyTasksFakeData: DailyTask[] = [
  {
    id: uuid(),
    description: 'Create your first program',
    route: 'CreateProgram' as Routes,
  },
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

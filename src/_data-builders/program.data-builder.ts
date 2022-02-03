import { faker } from '@faker-js/faker'

export function programDataBuilder(program = {}) {
  const template = {
    id: faker.datatype.uuid(),
    title: '3 weeks Upper Chest',
    description: 'You gonna work very hard stupid fat boy',
    workouts: [],
  }
  return { ...template, ...program }
}

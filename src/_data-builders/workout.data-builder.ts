import { faker } from '@faker-js/faker'

export function workoutDataBuilder(workout = {}) {
  const template = {
    id: faker.datatype.uuid(),
    title: 'Bas du corps',
  }
  return { ...template, ...workout }
}

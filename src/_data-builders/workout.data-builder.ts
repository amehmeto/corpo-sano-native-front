import { faker } from '@faker-js/faker'

export function workoutDataBuilder(workout = {}) {
  const titleExamples = ['Upper body', 'Legs', 'Pull workout', 'Cardio']
  const template = {
    id: faker.datatype.uuid(),
    title: faker.random.arrayElement(titleExamples),
  }
  return { ...template, ...workout }
}

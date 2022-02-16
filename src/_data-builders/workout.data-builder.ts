import { faker } from '@faker-js/faker'

export function workoutDataBuilder(workout = {}) {
  const titleExamples = ['Upper body', 'Legs', 'Pull workout', 'Cardio']
  const template = {
    id: faker.datatype.uuid(),
    title: faker.random.arrayElement(titleExamples),
    description: faker.lorem.paragraph(),
    programId: faker.datatype.uuid(),
    exercises: [],
    scheduledDays: [],
  }
  console.log(workout)
  return {
    ...template,
    ...workout,
  }
}

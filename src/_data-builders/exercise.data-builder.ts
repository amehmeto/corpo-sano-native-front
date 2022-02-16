import { faker } from '@faker-js/faker'

export function exerciseDataBuilder(exercise = {}) {
  const defaultExerciseTemplatesNames = [
    'Jumping jacks',
    'Wall sit',
    'Push-up',
    'Abdominal crunch',
    'Squat',
    'Triceps dip on chair',
    'Plank',
    'High knees running in place',
    'Lunge',
    'Push-up and rotation',
    'Side plank',
    'Jumping Rope',
  ]
  const template = {
    id: faker.datatype.uuid(),
    template: {
      id: faker.datatype.uuid(),
      title: faker.random.arrayElement(defaultExerciseTemplatesNames),
    },
    position: faker.datatype.number({ min: 0, max: 10 }),
    numberOfSets: faker.datatype.number({ min: 1, max: 4 }),
    numberOfReps: faker.datatype.number({ min: 8, max: 15 }),
    interSetsRestTime: 30,
    finalRestTime: 120,
  }
  return { ...template, ...exercise }
}

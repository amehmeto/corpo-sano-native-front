import { ExerciseTemplate } from './exercise-template.entity'

export class Exercise {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly template: ExerciseTemplate,
    public readonly numberOfSets: number,
    public readonly numberOfReps: number,
    public readonly interSetsRestTime: number,
    public readonly finalRestTime: number,
  ) {}
}

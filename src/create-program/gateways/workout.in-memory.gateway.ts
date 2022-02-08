import { WorkoutGateway } from './workout.gateway.interface'
import { ExerciseTemplate } from '../entities/exercise-template.entity'
import { ScheduledDay } from '../entities/scheduled-day.entity'
import { workoutDataBuilder } from '../../_data-builders/workout.data-builder'
import { WorkoutInput } from '../use-cases/create-workout.use-case'
import { v4 as uuid } from 'uuid'
import { Workout } from '../entities/workout.entity'
import { ProgramGateway } from './program.gateway.interface'

export class InMemoryWorkoutGateway implements WorkoutGateway {
  private rawWorkouts = [workoutDataBuilder()]
  private workouts = this.rawWorkouts.map(
    (workout) =>
      new Workout(
        uuid(),
        workout.title,
        workout.description,
        workout.programId,
      ),
  )

  constructor(private readonly programGateway: ProgramGateway) {}

  fillWithExercises(
    workoutId: string,
    exerciseTemplates: ExerciseTemplate[],
  ): Promise<boolean> {
    return Promise.resolve(false)
  }

  scheduleDays(workoutId: string, days: ScheduledDay[]): Promise<boolean> {
    return Promise.resolve(true)
  }

  create(workoutInput: WorkoutInput): Promise<Workout> {
    const createdWorkout = new Workout(
      uuid(),
      workoutInput.title,
      workoutInput.description,
      workoutInput.programId,
    )
    this.workouts.push(createdWorkout)
    return Promise.resolve(createdWorkout)
  }

  async findById(workoutId: string): Promise<Workout> {
    await this.updateWorkouts()

    const workout = this.workouts.find((_workout) => _workout.id === workoutId)
    if (!workout) throw new Error('Workout not found')
    return Promise.resolve(workout)
  }

  private async updateWorkouts() {
    const programs = await this.programGateway.find()
    let tempWorkouts: any[] = []
    for (let i = 0; programs[i]; i++)
      tempWorkouts = this.workouts.concat(programs[i].workouts)
    this.workouts = tempWorkouts
  }
}

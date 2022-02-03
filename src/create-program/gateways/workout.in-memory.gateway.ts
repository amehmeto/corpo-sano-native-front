import { WorkoutGateway } from './workout.gateway.interface'
import { ExerciseTemplate } from '../entities/exercise-template.entity'
import { ScheduledDay } from '../entities/scheduled-day.entity'
import { workoutDataBuilder } from '../../_data-builders/workout.data-builder'
import { WorkoutInput } from '../use-cases/create-workout.use-case'
import { v4 as uuid } from 'uuid'
import { Workout } from '../entities/workout.entity'

export class InMemoryWorkoutGateway implements WorkoutGateway {
  private rawWorkouts = [workoutDataBuilder()]
  private workouts = this.rawWorkouts.map(
    (workout) => new Workout(uuid(), workout.title, uuid()),
  )

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
    const newWorkout = {
      ...workoutInput,
      id: uuid(),
    }
    this.workouts.push(newWorkout)
    return Promise.resolve(
      new Workout(newWorkout.id, newWorkout.title, newWorkout.programId),
    )
  }
}

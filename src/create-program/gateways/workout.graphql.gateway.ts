import { ScheduledDay } from '../entities/scheduled-day.entity'
import { ExerciseTemplate } from '../entities/exercise-template.entity'
import { WorkoutGateway } from './workout.gateway.interface'
import { GraphQLGateway } from '../../_infrastructure/gateway/base.graphql.gateway'
import { WorkoutInput } from '../use-cases/create-workout.use-case'
import { Workout } from '../entities/workout.entity'

export class GraphQLWorkoutGateway
  extends GraphQLGateway
  implements WorkoutGateway
{
  async scheduleDays(
    workoutId: string,
    days: ScheduledDay[],
  ): Promise<boolean> {
    try {
      const SCHEDULE_WORKOUT_MUTATION = `mutation scheduleWorkout($payload: ScheduleWorkoutInput!) {
        scheduleWorkout(payload: $payload) {
          scheduledDays
        }
      }`

      const scheduleWorkoutMutationPayload = {
        query: SCHEDULE_WORKOUT_MUTATION,
        variables: {
          payload: {
            workoutId: workoutId,
            daysOfTheWeek: days,
          },
        },
      }

      const { scheduleWorkout } = await this.request(
        scheduleWorkoutMutationPayload,
      )
      return scheduleWorkout
    } catch (e) {
      throw this.handleError(e)
    }
  }

  async fillWithExercises(
    workoutId: string,
    exerciseTemplates: ExerciseTemplate[],
  ): Promise<boolean> {
    try {
      const FILL_WORKOUT_WITH_EXERCISES = `mutation
        fillWorkoutWithExercises($payload: FillWorkoutWithExercisesInput!) {
          fillWorkoutWithExercises(payload: $payload) {
            id
            title
            exercises {
              id
              template {
                id
                title
              }
            }
          }
        }`
      const fillWorkoutWithExercisesMutationPayload = {
        query: FILL_WORKOUT_WITH_EXERCISES,
        variables: {
          payload: {
            workoutId: workoutId,
            exerciseTemplateIds: exerciseTemplates.map(
              (exerciseTemplate) => exerciseTemplate.id,
            ),
          },
        },
      }

      const { fillWorkoutWithExercises } = await this.request(
        fillWorkoutWithExercisesMutationPayload,
      )
      return fillWorkoutWithExercises
    } catch (e) {
      throw this.handleError(e)
    }
  }

  create(workoutInput: WorkoutInput): Promise<Workout> {
    throw new Error('Method not implemented.')
  }
}

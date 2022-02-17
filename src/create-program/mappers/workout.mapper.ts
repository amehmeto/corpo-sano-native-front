import { Workout } from '../entities/workout.entity'
import { Exercise, PrintableTime } from '../entities/exercise.entity'

export class WorkoutMapper {
  public static mapToDomain(rawWorkout: any): Workout {
    const mappedExercises = rawWorkout.exercises.map((rawExercise: any) => {
      const interSetsRestTime = this.computeMinutesAndSeconds(
        rawExercise.interSetsRestTime,
      )
      const finalRestTime = this.computeMinutesAndSeconds(
        rawExercise.finalRestTime,
      )
      return new Exercise(
        rawExercise.id,
        rawExercise.template,
        rawExercise.numberOfSets,
        rawExercise.numberOfReps,
        interSetsRestTime,
        finalRestTime,
      )
    })
    return new Workout(
      rawWorkout.id,
      rawWorkout.title,
      rawWorkout.description,
      rawWorkout.programId,
      mappedExercises,
      rawWorkout.scheduledDays,
    )
  }

  private static computeMinutesAndSeconds(
    rawTimeInSeconds: number,
  ): PrintableTime {
    const minutes = Math.floor(rawTimeInSeconds / 60)
    const secondsLeft = rawTimeInSeconds % 60
    const printableSeconds =
      secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft.toString()
    return { minutes, seconds: printableSeconds }
  }
}

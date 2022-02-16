import { Exercise } from '../entities/exercise.entity'
import { Routes } from '../../router/Router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Margin } from '../../../design-system/enums/margin.enum'
import { Padding } from '../../../design-system/enums/padding.enum'
import { EditExerciseButton } from './EditExerciseButton'
import { DeleteExerciseButton } from './DeleteExerciseButton'
import { computeMinutesAndSeconds } from '../use-cases/compute-minutes-and-seconds.handler'

type ExerciseCardComponentProps = {
  exercise: Exercise
  goToExerciseSettings: () => Routes.EXERCISE_SETTINGS
  gotToEditWorkout: () => Routes.EDIT_WORKOUT
}
export function ExerciseCardComponent({
  exercise,
  goToExerciseSettings,
  gotToEditWorkout,
}: ExerciseCardComponentProps) {
  const { minutes: restTimeMinutes, seconds: restTimeSeconds } =
    computeMinutesAndSeconds(exercise.interSetsRestTime)
  const { minutes: finalRestMinutes, seconds: finalRestSeconds } =
    computeMinutesAndSeconds(exercise.finalRestTime)

  return (
    <Pressable style={styles.workoutPreview}>
      <View style={styles.titleAndEditIconsRow}>
        <Text style={styles.workoutTitle}>{exercise.template.title}</Text>
        <View style={styles.editIcons}>
          <EditExerciseButton onPress={goToExerciseSettings} />
          <DeleteExerciseButton onPress={gotToEditWorkout} />
        </View>
      </View>
      <Text>{`${exercise.numberOfSets} sets of ${exercise.numberOfReps} reps`}</Text>
      <Text>
        {`rest: ${restTimeMinutes} ' ${restTimeSeconds} '' \t final rest: ${finalRestMinutes} ' ${finalRestSeconds} ''`}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  workoutPreview: {
    width: '90%',
    margin: Margin.MEDIUM,
    padding: Padding.MEDIUM,
    flexGrow: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
  },
  titleAndEditIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  workoutTitle: {
    fontWeight: 'bold',
    marginBottom: Margin.SMALL,
  },
})

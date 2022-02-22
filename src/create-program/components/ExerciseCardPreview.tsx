import { Exercise } from '../entities/exercise.entity'
import { Routes } from '../../router/Router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Margin } from '../../../design-system/enums/margin.enum'
import { Padding } from '../../../design-system/enums/padding.enum'
import { EditExerciseButton } from './EditExerciseButton'
import { DeleteExerciseButton } from './DeleteExerciseButton'

type ExerciseCardComponentProps = {
  exercise: Exercise
  goToExerciseSettings: () => void
  gotToEditWorkout: () => void
}
export function ExerciseCardPreview({
  exercise,
  goToExerciseSettings,
  gotToEditWorkout,
}: ExerciseCardComponentProps) {
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
        {`rest: ${exercise.interSetsRestTime.minutes} ' ${exercise.interSetsRestTime.seconds} '' \t final rest: ${exercise.finalRestTime.minutes} ' ${exercise.finalRestTime.seconds} ''`}
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

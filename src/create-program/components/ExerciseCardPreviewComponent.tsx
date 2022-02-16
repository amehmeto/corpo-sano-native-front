import { Exercise } from '../entities/exercise.entity'
import { Routes } from '../../router/Router'
import { Pressable, Text, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Margin } from '../../../design-system/enums/margin.enum'
import { Padding } from '../../../design-system/enums/padding.enum'

type ExerciseCardComponentProps = {
  exercise: Exercise
  goToExerciseSettings: () => Routes.EXERCISE_SETTINGS
  gotToEditWorkout: () => Routes.EDIT_WORKOUT
}

function EditExerciseButton(props: {
  onPress: () => Routes.EXERCISE_SETTINGS
}) {
  return (
    <Pressable onPress={props.onPress}>
      <MaterialCommunityIcons
        name={'square-edit-outline'}
        size={20}
        color={'gray'}
      />
    </Pressable>
  )
}

function DeleteExerciseButton(props: { onPress: () => Routes.EDIT_WORKOUT }) {
  return (
    <Pressable onPress={props.onPress}>
      <MaterialCommunityIcons
        name={'delete-outline'}
        size={20}
        color={'gray'}
      />
    </Pressable>
  )
}

export function ExerciseCardComponent({
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
      <Text>{`rest: ${3} ' ${15} '' \t final rest: ${3} ' ${15} ''`}</Text>
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

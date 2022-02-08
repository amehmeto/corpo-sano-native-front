import { Workout } from '../entities/workout.entity'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Margin } from '../../../design-system/enums/margin.enum'
import { Padding } from '../../../design-system/enums/padding.enum'

export function WorkoutPreviewCard(props: {
  workout: Workout
  navigate: () => any
  openDeleteModal: () => any
  elements: JSX.Element[]
}) {
  return (
    <Pressable style={styles.workoutPreview}>
      <View style={styles.titleAndEditIcons}>
        <Text style={styles.workoutTitle}>{props.workout.title}</Text>
        <View style={styles.editIcons}>
          <Pressable onPress={props.navigate}>
            <MaterialCommunityIcons
              name={'square-edit-outline'}
              size={20}
              color={'gray'}
            />
          </Pressable>
          <Pressable onPress={props.openDeleteModal}>
            <MaterialCommunityIcons
              name={'delete-outline'}
              size={20}
              color={'gray'}
            />
          </Pressable>
        </View>
      </View>
      <Text>{`${props.workout.exercises.length} exercises`}</Text>
      <View style={styles.dayInitialContainer}>{props.elements}</View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  workoutPreview: {
    margin: Margin.MEDIUM,
    padding: Padding.MEDIUM,
    flexGrow: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
  },
  titleAndEditIcons: {
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
  dayInitialContainer: {
    flexDirection: 'row',
  },
})

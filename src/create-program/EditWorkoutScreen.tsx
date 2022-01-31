import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AntDesign as AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { exercisesFakeData } from './gateways/exercise.fake-data.repository'
import { scheduledDaysFakeData } from './gateways/schedule-days.fake-data.repository'
import { SaveWorkoutEditUseCase } from './use-cases/save-workout-edit.use-case'
import { v4 as uuid } from 'uuid'
import { GraphQLWorkoutGateway } from './gateways/workout.graphql.gateway'
import { WorkoutGateway } from './gateways/workout.gateway.interface'
import { selectWantedExercise } from './use-cases/select-exercise.handler'
import { scheduleWantedDays } from './use-cases/schedule-days.handler'
import { Button } from '../../design-system/Button'

const workoutGateway: WorkoutGateway = new GraphQLWorkoutGateway()
const saveWorkoutEditUseCase = new SaveWorkoutEditUseCase(workoutGateway)

export default function EditWorkoutScreen({ navigation }: any) {
  const [scheduledDays, setScheduledDays] = useState(scheduledDaysFakeData)
  const [exercises, setExercises] = useState(exercisesFakeData)
  const workoutId = uuid()

  const selectExercise = (exerciseIndex: number) => {
    setExercises((prevExercises) =>
      selectWantedExercise(prevExercises, exerciseIndex),
    )
  }

  const scheduleDay = (dayIndex: number) => {
    setScheduledDays((prevScheduledDays) =>
      scheduleWantedDays(prevScheduledDays, dayIndex),
    )
  }

  const saveWorkout = async () => {
    try {
      await saveWorkoutEditUseCase.execute(workoutId, exercises, scheduledDays)
    } catch (e) {
      console.error(e)
    } finally {
      navigation.navigate('ExerciseSettings')
    }
  }

  const exercisesElements = exercises.map((exercise, index) => {
    const exerciseStyle = exercise.isSelected
      ? styles.selectedExercise
      : styles.exercise
    return (
      <Pressable
        key={index}
        style={styles.exerciseContainer}
        onPress={() => selectExercise(index)}
      >
        <Text style={exerciseStyle}>{exercise.name}</Text>
        <AntDesign name="closecircle" size={25} />
      </Pressable>
    )
  })

  const daysSelector = scheduledDays.map((day, index) => {
    const dayStyle = day.isScheduled ? styles.scheduledDay : styles.day
    return (
      <Text key={index} style={dayStyle} onPress={() => scheduleDay(index)}>
        {day.day}
      </Text>
    )
  })

  return (
    <View style={styles.container}>
      <Text>You've just created your first program</Text>

      <Text style={styles.title}>Upper body Lafay - 1st week</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.exercises}>{exercisesElements}</View>
      </ScrollView>

      <View style={styles.days}>{daysSelector}</View>

      <Button text={'Schedule Days'} onPress={saveWorkout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: 'gray',
  },
  fields: {
    width: '80%',
    alignItems: 'stretch',
  },
  exercises: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 10,
    minWidth: '60%',
  },
  exercise: {
    textAlign: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    flexBasis: 175,
  },
  scroll: {
    maxHeight: '60%',
  },
  selectedExercise: {
    textAlign: 'center',
    textDecorationColor: 'green',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: '#80ff80',
    flexBasis: 175,
  },

  day: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 2,
    fontSize: 8,
  },

  scheduledDay: {
    textAlign: 'center',
    textDecorationColor: 'green',
    padding: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    margin: 2,
    fontSize: 8,
    fontWeight: 'bold',
    backgroundColor: '#80ff80',
  },

  days: {
    display: 'flex',
    flexDirection: 'row',
  },
  exerciseContainer: { flexDirection: 'row', alignItems: 'center' },
})

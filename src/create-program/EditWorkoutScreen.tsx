import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AntDesign as AntDesign } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { exercisesFakeData } from './gateways/exercise.fake-data.repository'
import { scheduledDaysFakeData } from './gateways/schedule-days.fake-data.repository'
import { SaveWorkoutEditUseCase } from './use-cases/save-workout-edit.use-case'
import { v4 as uuid } from 'uuid'
import { selectWantedExercise } from './use-cases/select-exercise.handler'
import { scheduleWantedDays } from './use-cases/schedule-days.handler'
import { Button } from '../../design-system/Button'
import { RouteParams, Routes } from '../router/Router'
import { Workout } from './entities/workout.entity'
import { workoutGateway } from '../di-container.experiment'
import { GetWorkoutUseCase } from './use-cases/get-workout.use-case'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const saveWorkoutEditUseCase = new SaveWorkoutEditUseCase(workoutGateway)
const getWorkoutUseCase = new GetWorkoutUseCase(workoutGateway)

type EditWorkoutScreenProps = NativeStackScreenProps<
  RouteParams,
  Routes.EDIT_WORKOUT
>

export default function EditWorkoutScreen({
  route,
  navigation,
}: EditWorkoutScreenProps) {
  const { workoutId } = route.params
  console.log('Inside  EditWorkout: ' + workoutId)

  const [scheduledDays, setScheduledDays] = useState(scheduledDaysFakeData)
  const [exercises, setExercises] = useState(exercisesFakeData)
  const [workout, setWorkout] = useState<Workout | undefined>(undefined)
  const exerciseId = uuid()

  useEffect(() => {
    getWorkoutUseCase.execute(workoutId).then((_workout) => {
      setWorkout(_workout)
    })
  }, [])

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
      navigation.push(Routes.EXERCISE_SETTINGS, {
        exerciseId,
      })
    } catch (e) {
      console.error(e)
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

  if (!workout) return <Text>Loading... Bekle amk</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      <Text>{workout.description ?? 'No description'}</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.exercises}>{exercisesElements}</View>
      </ScrollView>

      <View style={styles.days}>{daysSelector}</View>

      <Button text={'Update Workout'} onPress={saveWorkout} />
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

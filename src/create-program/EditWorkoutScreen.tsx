import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { scheduledDaysFakeData } from './gateways/schedule-days.fake-data.repository'
import { SaveWorkoutEditUseCase } from './use-cases/save-workout-edit.use-case'
import { v4 as uuid } from 'uuid'
import { scheduleWantedDays } from './use-cases/schedule-days.handler'
import { Button } from '../../design-system/Button'
import { RouteParams, Routes } from '../router/Router'
import { Workout } from './entities/workout.entity'
import { workoutGateway } from '../di-container.experiment'
import { GetWorkoutUseCase } from './use-cases/get-workout.use-case'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Exercise } from './entities/exercise.entity'
import { ExerciseCardComponent } from './components/ExerciseCardPreviewComponent'

const updateWorkoutEditUseCase = new SaveWorkoutEditUseCase(workoutGateway)
const getWorkoutUseCase = new GetWorkoutUseCase(workoutGateway)

type EditWorkoutScreenProps = NativeStackScreenProps<
  RouteParams,
  Routes.EDIT_WORKOUT
>

export default function EditWorkoutScreen({
  route,
  navigation,
}: EditWorkoutScreenProps) {
  const workoutId = route.params.workoutId

  const [workout, setWorkout] = useState<Workout | undefined>(undefined)
  const [scheduledDays, setScheduledDays] = useState(scheduledDaysFakeData)

  useEffect(() => {
    getWorkoutUseCase.execute(workoutId).then((_workout) => {
      setWorkout(_workout)
    })
  }, [])

  const scheduleDay = (dayIndex: number) => {
    setScheduledDays((prevScheduledDays) =>
      scheduleWantedDays(prevScheduledDays, dayIndex),
    )
  }

  const updateWorkout = async () => {
    try {
      await updateWorkoutEditUseCase.execute(workoutId, scheduledDays)
      navigation.push(Routes.PROGRAM_PREVIEW, {
        programId: uuid(),
      })
    } catch (e) {
      console.error(e)
    }
  }

  const renderExerciseCard = ({
    item: exercise,
  }: ListRenderItemInfo<Exercise>) => (
    <ExerciseCardComponent
      exercise={exercise}
      goToExerciseSettings={() => Routes.EXERCISE_SETTINGS}
      gotToEditWorkout={() => Routes.EDIT_WORKOUT}
    />
  )

  const daysSelector = scheduledDays.map((day, index) => {
    const dayStyle = day.isScheduled ? styles.scheduledDay : styles.day
    return (
      <Text key={index} style={dayStyle} onPress={() => scheduleDay(index)}>
        {day.day.slice(0, 3)}
      </Text>
    )
  })

  if (!workout) return <Text>Loading...</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      <Text>{workout.description ?? 'No description'}</Text>

      <FlatList
        style={[styles.scroll]}
        data={workout.exercises}
        renderItem={renderExerciseCard}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.days}>{daysSelector}</View>

      <Button text={'Update Workout'} onPress={updateWorkout} />
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
  exercises: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 10,
    minWidth: '60%',
  },
  scroll: {
    width: '90%',
    maxHeight: '60%',
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
})

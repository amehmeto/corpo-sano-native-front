import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpdateWorkoutUseCase } from './use-cases/update-workout.usecase'
import { v4 as uuid } from 'uuid'
import { scheduleWantedDays } from './use-cases/schedule-days.handler'
import { Button } from '../../design-system/Button'
import { RouteParams, Routes } from '../router/Router'
import { ScheduledDay, Workout } from './entities/workout.entity'
import { workoutGateway } from '../di-container.experiment'
import { GetWorkoutUseCase } from './use-cases/get-workout.usecase'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Exercise } from './entities/exercise.entity'
import { ExerciseCardPreview } from './components/ExerciseCardPreview'

const updateWorkoutEditUseCase = new UpdateWorkoutUseCase(workoutGateway)
const getWorkoutUseCase = new GetWorkoutUseCase(workoutGateway)

type EditWorkoutScreenProps = NativeStackScreenProps<
  RouteParams,
  Routes.EDIT_WORKOUT
>

function formatForButton(day: ScheduledDay) {
  return `${day.name.charAt(0)}${day.name.slice(1, 3)}`
}

export default function EditWorkoutScreen({
  route,
  navigation,
}: EditWorkoutScreenProps) {
  const workoutId = route.params.workoutId

  const [workout, setWorkout] = useState<Workout | undefined>(undefined)

  useEffect(() => {
    getWorkoutUseCase
      .execute(workoutId)
      .then((retrievedWorkout) => setWorkout(retrievedWorkout))
  }, [])

  const scheduleDay = (dayIndex: number) => {
    setWorkout((prevWorkout) => {
      if (!prevWorkout?.scheduledDays) return prevWorkout
      const newScheduledDays = scheduleWantedDays(
        prevWorkout?.scheduledDays,
        dayIndex,
      )
      return {
        ...prevWorkout,
        scheduledDays: newScheduledDays,
      }
    })
  }

  const updateWorkout = async () => {
    try {
      if (workout) await updateWorkoutEditUseCase.execute(workoutId, workout)
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
    <ExerciseCardPreview
      exercise={exercise}
      goToExerciseSettings={() => Routes.EXERCISE_SETTINGS}
      gotToEditWorkout={() => Routes.EDIT_WORKOUT}
    />
  )

  const renderScheduledDayButton = ({
    item: day,
    index,
  }: ListRenderItemInfo<ScheduledDay>) => {
    const dayStyle = day ? styles.scheduledDay : styles.day
    return (
      <Text onPress={() => scheduleDay(index)} style={dayStyle}>
        {formatForButton(day)}
      </Text>
    )
  }
  /*  const daysSelector = scheduledDays.map((day, index) => {
    const dayStyle = day.isScheduled ? styles.scheduledDay : styles.day
    return (
      <Text key={index} style={dayStyle} onPress={() => scheduleDay(index)}>
        {day.day.slice(0, 3)}
      </Text>
    )
  })*/

  if (!workout) return <Text>Loading...</Text>
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scroll}
        data={workout.exercises}
        renderItem={renderExerciseCard}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>{workout.title}</Text>
            <Text>{workout.description ?? 'No description'}</Text>
          </>
        }
      />

      {/*
      <View style={styles.days}>{daysSelector}</View>
      */}
      <FlatList
        style={styles.days}
        data={workout.scheduledDays}
        renderItem={renderScheduledDayButton}
      />

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

    borderStyle: 'solid',
  },
})

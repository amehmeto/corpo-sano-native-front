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
import { FontSize } from '../../design-system/enums/font-size.enum'
import { Padding } from '../../design-system/enums/padding.enum'
import { Margin } from '../../design-system/enums/margin.enum'

const updateWorkoutEditUseCase = new UpdateWorkoutUseCase(workoutGateway)
const getWorkoutUseCase = new GetWorkoutUseCase(workoutGateway)

type EditWorkoutScreenProps = NativeStackScreenProps<
  RouteParams,
  Routes.EDIT_WORKOUT
>

function formatForButton(day: ScheduledDay) {
  return `${day.name.charAt(0).toUpperCase()}${day.name.slice(1, 3)}`
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
    const dayStyle = day ? styles.scheduledDay : styles.unscheduledDay
    return (
      <Text onPress={() => scheduleDay(index)} style={dayStyle}>
        {formatForButton(day)}
      </Text>
    )
  }

  if (!workout) return <Text>Loading...</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      <Text>{workout.description ?? 'No description'}</Text>
      <FlatList
        style={styles.scroll}
        data={workout.exercises}
        renderItem={renderExerciseCard}
      />

      <FlatList
        style={styles.days}
        data={workout.scheduledDays}
        renderItem={renderScheduledDayButton}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />

      <Button text={'Update Workout'} onPress={updateWorkout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: Margin.MEDIUM,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSize.HEADING_4,
  },
  exercises: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: Padding.MEDIUM,
    minWidth: '60%',
  },
  scroll: {
    width: '90%',
    maxHeight: '60%',
  },
  days: {
    margin: Margin.MEDIUM,
    flexGrow: 0,
  },
  unscheduledDay: {
    height: 'min-content',

    textAlign: 'center',
    padding: Padding.MEDIUM,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: Margin.SMALL,
    fontSize: FontSize.BODY_TEXT_SMALL,
  },
  scheduledDay: {
    height: 'min-content',

    textAlign: 'center',
    textDecorationColor: 'green',
    padding: Padding.MEDIUM,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    margin: Margin.SMALL,
    fontSize: FontSize.BODY_TEXT_SMALL,
    fontWeight: 'bold',
    backgroundColor: '#80ff80',
  },
})

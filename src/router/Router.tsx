import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from '../home/HomeScreen'
import CreateProgramScreen from '../create-program/CreateProgramScreen'
import AddExercisesAndDayScheduleToWorkoutScreen from '../create-program/AddExercisesAndDayScheduleToWorkoutScreen'
import ExerciseSettingsScreen from '../create-program/ExerciseSettingsScreen'
import WorkoutPreviewScreen from '../run-workout/WorkoutPreview'
import SetsRunnerScreen from '../run-workout/SetsRunnerScreen'
import WorkoutSessionSummaryScreen from '../run-workout/WorkoutSessionSummaryScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateWorkoutScreen from '../create-program/CreateWorkoutScreen'
import ProgramPreviewScreen from '../create-program/ProgramPreviewScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export type RouteParams = {
  Home: undefined
  CreateProgram: undefined
  ProgramPreview: {
    programId: string
    title: string
    description: string
  }
  CreateWorkout: {
    programId: string
  }
  AddExercises: undefined
  EditWorkout: undefined
  ExerciseSettings: undefined
  WorkoutPreview: undefined
  SetsRunner: undefined
  WorkoutSessionSummary: undefined
}

const routes = [
  { name: 'Home', component: HomeScreen },
  { name: 'CreateProgram', component: CreateProgramScreen },
  { name: 'ProgramPreview', component: ProgramPreviewScreen },
  { name: 'CreateWorkout', component: CreateWorkoutScreen },
  {
    name: 'AddExercises',
    component: AddExercisesAndDayScheduleToWorkoutScreen,
  },
  { name: 'ExerciseSettings', component: ExerciseSettingsScreen },
  { name: 'WorkoutPreview', component: WorkoutPreviewScreen },
  { name: 'SetsRunner', component: SetsRunnerScreen },
  { name: 'WorkoutSessionSummary', component: WorkoutSessionSummaryScreen },
] as const

export enum Routes {
  HOME = 'Home',
  CREATE_PROGRAM = 'CreateProgram',
  PROGRAM_PREVIEW = 'ProgramPreview',
  ADD_EXERCISES = 'AddExercises',
  CREATE_WORKOUT = 'CreateWorkout',
  EXERCISE_SETTINGS = 'ExerciseSettings',
  WORKOUT_PREVIEW = 'WorkoutPreview',
  SETS_RUNNER = 'SetsRunner',
  WORKOUT_SESSION_SUMMARY = 'WorkoutSessionSummary',
}

export function Router() {
  const screens = routes.map((route, index) => {
    return <Screen key={index} name={route.name} component={route.component} />
  })
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.HOME}>{screens}</Navigator>
    </NavigationContainer>
  )
}

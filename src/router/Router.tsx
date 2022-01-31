import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from '../home/HomeScreen'
import CreateProgramScreen from '../create-program/CreateProgramScreen'
import AddExercisesScreen from '../create-program/AddExercisesScreen'
import EditWorkoutScreen from '../create-program/EditWorkoutScreen'
import ExerciseSettingsScreen from '../create-program/ExerciseSettingsScreen'
import WorkoutPreviewScreen from '../run-workout/WorkoutPreview'
import SetsRunnerScreen from '../run-workout/SetsRunnerScreen'
import WorkoutSessionSummaryScreen from '../run-workout/WorkoutSessionSummaryScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export type RouteParams = {
  Home: undefined
  CreateProgram: undefined
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
  { name: 'AddExercises', component: AddExercisesScreen },
  { name: 'EditWorkout', component: EditWorkoutScreen },
  { name: 'ExerciseSettings', component: ExerciseSettingsScreen },
  { name: 'WorkoutPreview', component: WorkoutPreviewScreen },
  { name: 'SetsRunner', component: SetsRunnerScreen },
  { name: 'WorkoutSessionSummary', component: WorkoutSessionSummaryScreen },
] as const

export enum Routes {
  HOME = 'Home',
  CREATE_PROGRAM = 'CreateProgram',
  ADD_EXERCISES = 'AddExercises',
  EDIT_WORKOUT = 'EditWorkout',
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

import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from '../home/HomeScreen'
import CreateProgramScreen from '../create-workout/CreateProgramScreen'
import AddExercisesScreen from '../create-workout/AddExercisesScreen'
import EditWorkoutScreen from '../create-workout/EditWorkoutScreen'
import ExerciseSettingsScreen from '../create-workout/ExerciseSettingsScreen'
import WorkoutPreviewScreen from '../run-workout/WorkoutPreview'
import SetsRunnerScreen from '../run-workout/SetsRunnerScreen'
import WorkoutSessionSummaryScreen from '../run-workout/WorkoutSessionSummaryScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
const { Navigator, Screen } = createNativeStackNavigator()

export function Router() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen
          name="CreateProgram"
          component={CreateProgramScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Screen name="AddExercises" component={AddExercisesScreen} />
        <Screen name="EditWorkout" component={EditWorkoutScreen} />
        <Screen name="ExerciseSettings" component={ExerciseSettingsScreen} />
        <Screen name="WorkoutPreview" component={WorkoutPreviewScreen} />
        <Screen name="SetsRunner" component={SetsRunnerScreen} />
        <Screen
          name="WorkoutSessionSummary"
          component={WorkoutSessionSummaryScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}

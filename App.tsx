import { NativeBaseProvider } from 'native-base'
import { NavBar } from './src/home/NavBar'
import React from 'react'
import WorkoutSessionSummaryScreen from './src/run-workout/WorkoutSessionSummaryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './src/home/HomeScreen'
import CreateProgramScreen from './src/create-workout/CreateProgramScreen'
import EditWorkoutScreen from './src/create-workout/EditWorkoutScreen'
import ExerciseSettingsScreen from './src/create-workout/ExerciseSettingsScreen'
import WorkoutPreviewScreen from './src/run-workout/WorkoutPreview'
import AddExercisesScreen from './src/create-workout/AddExercisesScreen'
import SetsRunnerScreen from './src/run-workout/SetsRunnerScreen'

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

function Router() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="ExerciseSettings">
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

export default function App() {
  return (
    <NativeBaseProvider>
      <Router />
      <NavBar />
    </NativeBaseProvider>
  )
}

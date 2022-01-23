import { NativeBaseProvider } from 'native-base'
import { NavBar } from './src/home/NavBar'
import CreateProgramScreen from './src/create-workout/CreateProgramScreen'
import { StyleSheet, View } from 'react-native'
import { HomeScreen } from './src/home/HomeScreen'
import AddExercisesScreen from './src/create-workout/AddExercisesScreen'
import EditWorkout from './src/create-workout/EditWorkout'
import React from 'react'
import ExerciseSettings from './src/create-workout/ExerciseSettings'
import WorkoutPreview from './src/run-workout/WorkoutPreview'
import SetsRunnerScreen from './src/run-workout/SetsRunnerScreen'
import WorkoutSessionSummaryScreen from './src/run-workout/WorkoutSessionSummaryScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      {/*<HomeScreen />*/}
      {/*<CreateProgramScreen />*/}
      {/*<AddExercisesScreen />*/}
      {/*<EditWorkout />*/}
      {/* <ExerciseSettings /> */}
      {/* <WorkoutPreview /> */}
      {/* <SetsRunnerScreen /> */}
      <WorkoutSessionSummaryScreen />
      <NavBar />
    </NativeBaseProvider>
  )
}

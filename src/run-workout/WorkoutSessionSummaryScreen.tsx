import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../design-system/Button'
import { Feather } from '@expo/vector-icons'

export default function WorkoutSessionSummaryScreen() {
  const todaySessionExercisesStats = [
    { name: 'Push-up', lastSets: [4, 8, 9] },
    { name: 'Dips', lastSets: [4, 8, 9] },
    { name: 'Abs', lastSets: [4, 8, 9] },
    { name: 'Squat', lastSets: [4, 8, 9] },
    { name: 'Push-up', lastSets: [4, 8, 9] },
    { name: 'Dips', lastSets: [4, 8, 9] },
    { name: 'Abs', lastSets: [4, 8, 9] },
    { name: 'Squat', lastSets: [4, 8, 9] },
    { name: 'Tractions', lastSets: [4, 8, 9] },
    { name: 'Tractions', lastSets: [4, 8, 9] },
  ]
  const exerciseSetsSummary = todaySessionExercisesStats.map(
    (exercise, index) => {
      const setPerfs = exercise.lastSets.map((perf, index) => (
        <Text key={index} style={styles.exercisePerf}>
          {perf}
        </Text>
      ))
      return (
        <View style={styles.exerciseRow} key={index}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          {setPerfs}
          <Feather name="arrow-up-right" size={24} color="black" />
        </View>
      )
    },
  )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upper Body Workout</Text>

      <Text>Congratulations, you've just finished your workout session!</Text>

      <Text style={styles.title}>Session summary</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {exerciseSetsSummary}
      </ScrollView>

      <Button
        additionalStyle={styles.button}
        text={'Leave Workout Session'}
        onPress={() => {}}
      />
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
    fontSize: 30,
    margin: 20,
  },
  scroll: {
    display: 'flex',
    alignItems: 'center',
    width: 400,

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    marginTop: 20,
  },
  exerciseRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
  },
  exerciseName: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    fontSize: 18,
    color: 'red',

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  exercisePerf: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    fontSize: 18,
    color: 'red',
  },
})

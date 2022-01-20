import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AddExercisesScreen() {
  const exercisesDataFromApi = [
    { name: 'Abs', isSelected: true },
    { name: 'Squat', isSelected: false },
    { name: 'Pull up', isSelected: false },
    { name: 'Push up', isSelected: false },
    { name: 'Abs', isSelected: false },
    { name: 'Squat', isSelected: false },
    { name: 'Pull up', isSelected: false },
    { name: 'Push up', isSelected: false },
    { name: 'Abs', isSelected: false },
    { name: 'Squat', isSelected: false },
    { name: 'Pull up', isSelected: false },
    { name: 'Push up', isSelected: false },
    { name: 'Abs', isSelected: false },
    { name: 'Squat', isSelected: false },
    { name: 'Pull up', isSelected: false },
  ]

  const exercisesElements = exercisesDataFromApi.map((exercise) => {
    const exerciseStyle = exercise.isSelected
      ? styles.selectedExercise
      : styles.exercise
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={exerciseStyle}>{exercise.name}</Text>
      </View>
    )
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add exercises</Text>

      <Text>Choose among the exercises below :</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.exercises}>{exercisesElements}</View>
      </ScrollView>

      <Button title={'Create program'} onPress={() => {}} />
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
    flexGrow: 1,
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
    flexGrow: 1,
  },
})

import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AntDesign as AntDesign } from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../router/Router'

export default function EditWorkoutScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()

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

  const daysData = [
    { day: 'monday', isSelected: true },
    { day: 'tuesday', isSelected: false },
    { day: 'wednesday', isSelected: false },
    { day: 'thursday', isSelected: false },
    { day: 'friday', isSelected: false },
    { day: 'saturday', isSelected: false },
    { day: 'sunday', isSelected: false },
  ]

  const exercisesElements = exercisesDataFromApi.map((exercise, index) => {
    const exerciseStyle = exercise.isSelected
      ? styles.selectedExercise
      : styles.exercise
    return (
      <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={exerciseStyle}>{exercise.name}</Text>
        <AntDesign name="closecircle" size={25} />
      </View>
    )
  })

  const daysSelector = daysData.map((day, index) => {
    const dayStyle = day.isSelected ? styles.selectedDay : styles.day
    return (
      <Text key={index} style={dayStyle}>
        {day.day}
      </Text>
    )
  })

  function goToExercisesSettingsScreen() {
    navigation.navigate('ExerciseSettings')
  }

  return (
    <View style={styles.container}>
      <Text>You've just created your first program</Text>

      <Text style={styles.title}>Upper body Lafay - 1st week</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.exercises}>{exercisesElements}</View>
      </ScrollView>

      <View style={styles.days}>{daysSelector}</View>

      <Button title={'Schedule Days'} onPress={goToExercisesSettingsScreen} />
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
    flexBasis: 175,
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
    flexBasis: 175,
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

  selectedDay: {
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

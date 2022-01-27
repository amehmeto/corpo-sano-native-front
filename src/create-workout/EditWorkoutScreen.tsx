import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AntDesign as AntDesign } from '@expo/vector-icons'
import React from 'react'
import { exercisesFakeData } from './gateways/exercise.fake-data.repository'
import { scheduledDaysFakeData } from './gateways/schedule-days.fake-data.repository'

export default function EditWorkoutScreen({ navigation }: any) {
  const exercisesElements = exercisesFakeData.map((exercise, index) => {
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

  const daysSelector = scheduledDaysFakeData.map((day, index) => {
    const dayStyle = day.isScheduled ? styles.scheduledDay : styles.day
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
  },
})

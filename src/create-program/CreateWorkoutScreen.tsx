import { StyleSheet, Text, TextInput, View } from 'react-native'
import { NavBar } from '../home/components/NavBar'
import React, { useState } from 'react'
import { Button } from '../../design-system/Button'
import { Routes } from '../router/Router'
import { WorkoutGateway } from './gateways/workout.gateway.interface'
import { CreateWorkoutUseCase } from './use-cases/create-workout.use-case'
import { InMemoryWorkoutGateway } from './gateways/workout.in-memory.gateway'

const inMemoryWorkoutGateway: WorkoutGateway = new InMemoryWorkoutGateway()
const createWorkoutUseCase = new CreateWorkoutUseCase(inMemoryWorkoutGateway)

export default function CreateWorkoutScreen({ route, navigation }: any) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const programId = route.params.programId

  async function createWorkout() {
    try {
      const createdWorkout = await createWorkoutUseCase.execute({
        title,
        description,
        programId,
      })
      navigation.push(Routes.ADD_EXERCISES, {
        title,
        programId,
        workoutId: createdWorkout.id,
      })
    } catch (e) {
      console.warn(e)
    }
  }

  const changeTitle = (event: any) => setTitle(event.target.value)

  const changeDescription = (event: any) => setDescription(event.target.value)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Create a workout</Text>

        <View style={styles.fields}>
          <TextInput
            style={styles.input}
            placeholder={'Name'}
            value={title}
            onChange={changeTitle}
          />
          <TextInput
            style={styles.input}
            placeholder={'Description'}
            value={description}
            onChange={changeDescription}
          />
        </View>

        <Button text={'Create workout'} onPress={createWorkout} />
      </View>
      <NavBar />
    </>
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
})

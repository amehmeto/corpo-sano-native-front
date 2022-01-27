import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavBar } from '../home/NavBar'
import { CreateProgramUseCase } from './use-cases/create-program.use-case'
import { InMemoryProgramGateway } from './gateways/program.in-memory.gateway'
import React, { useState } from 'react'

export default function CreateProgramScreen({ navigation }: any) {
  const [title, setTitle] = useState('abricot')
  const [description, setDescription] = useState('')

  async function createProgram() {
    const createProgramGateway = new InMemoryProgramGateway()
    const createProgramUseCase = new CreateProgramUseCase(createProgramGateway)
    const createdProgram = await createProgramUseCase.execute({
      title,
      description,
    })
    console.log(createdProgram)
    navigation.navigate('EditWorkout')
  }

  const changeTitle = (event: any) => setTitle(event.target.value)

  const changeDescription = (event: any) => setDescription(event.target.value)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Create a program</Text>

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

        <Button title={'Create workout'} onPress={createProgram} />
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

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavBar } from '../home/NavBar'
import { CreateProgramUseCase } from './use-cases/create-program.use-case'
import { InMemoryProgramGateway } from './gateways/program.in-memory.gateway'
import React, { useState } from 'react'

export default function CreateProgramScreen({ navigation }: any) {
  let [program, setProgram] = useState({
    title: '',
    description: '',
  })

  async function createProgram() {
    const createProgramGateway = new InMemoryProgramGateway()
    const createProgramUseCase = new CreateProgramUseCase(createProgramGateway)
    const createdProgram = await createProgramUseCase.execute(program)
    console.log(createdProgram)
    navigation.navigate('EditWorkout')
  }

  function changeTitle() {
    return (title: string) => {
      setProgram((prevState) => ({
        description: prevState.description,
        title,
      }))
    }
  }

  function changeDescription() {
    return (description: string) => {
      setProgram((prevState) => ({
        description,
        title: prevState.title,
      }))
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Create a program</Text>

        <View style={styles.fields}>
          <TextInput
            style={styles.input}
            placeholder={'Name'}
            onChangeText={changeTitle()}
          />
          <TextInput
            style={styles.input}
            placeholder={'Description'}
            onChangeText={changeDescription()}
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

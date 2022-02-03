import { StyleSheet, Text, TextInput, View } from 'react-native'
import { NavBar } from '../home/components/NavBar'
import { CreateProgramUseCase } from './use-cases/create-program.use-case'
import React, { useState } from 'react'
import { Button } from '../../design-system/Button'
import { Routes } from '../router/Router'
import { ProgramGateway } from './gateways/program.gateway.interface'
import { InMemoryProgramGateway } from './gateways/program.in-memory.gateway'

const createProgramGateway: ProgramGateway = new InMemoryProgramGateway()
const createProgramUseCase = new CreateProgramUseCase(createProgramGateway)

export default function CreateProgramScreen({ navigation }: any) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function createProgram() {
    try {
      const createdProgram = await createProgramUseCase.execute({
        title,
        description,
      })
      navigation.push(Routes.CREATE_WORKOUT, {
        programId: createdProgram.id,
        title,
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

        <Button text={'Create program'} onPress={createProgram} />
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

import { StyleSheet, Text, TextInput, View } from 'react-native'
import { NavBar } from '../home/components/NavBar'
import { CreateProgramUseCase } from './use-cases/create-program.use-case'
import React, { useState } from 'react'
import { Button } from '../../design-system/Button'
import { RouteParams, Routes } from '../router/Router'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { faker } from '@faker-js/faker'
import { programGateway } from '../di-container.experiment'

const createProgramUseCase = new CreateProgramUseCase(programGateway)

type CreateProgramScreenProps = NativeStackScreenProps<
  RouteParams,
  Routes.CREATE_PROGRAM
>

export default function CreateProgramScreen({
  navigation,
}: CreateProgramScreenProps) {
  const [title, setTitle] = useState('3 weeks upper body')
  const [description, setDescription] = useState(faker.lorem.paragraph())

  async function createProgram() {
    try {
      const createdProgram = await createProgramUseCase.execute({
        title,
        description,
      })
      navigation.push(Routes.PROGRAM_PREVIEW, {
        programId: createdProgram.id,
        title,
        description,
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
            placeholder={'Name (required)'}
            value={title}
            onChange={changeTitle}
          />
          <TextInput
            style={styles.input}
            placeholder={'Description (optional)'}
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

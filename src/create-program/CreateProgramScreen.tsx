import { StyleSheet, Text, TextInput, View } from 'react-native'
import { NavBar } from '../home/NavBar'
import { CreateProgramUseCase } from './use-cases/create-program.use-case'
import { GraphQLProgramGateway } from './gateways/program.graphql.gateway'
import React, { useState } from 'react'
import { Button } from '../../design-system/Button'
import { Routes } from '../router/Router'

const createProgramGateway = new GraphQLProgramGateway()
const createProgramUseCase = new CreateProgramUseCase(createProgramGateway)

export default function CreateProgramScreen({ navigation }: any) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function createProgram() {
    try {
      await createProgramUseCase.execute({
        title,
        description,
      })
    } catch (e) {
      console.warn(e)
    } finally {
      navigation.push(Routes.EDIT_WORKOUT, { title })
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

        <Button text={'Create workout'} onPress={createProgram} />
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

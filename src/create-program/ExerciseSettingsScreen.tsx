import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RestTimeSetter } from './components/RestTimeSetter'
import { NumberSetter } from './components/NumberSetter'
import { Button } from '../../design-system/Button'
import { FontSize } from '../../design-system/enums/font-size.enum'
import { Routes } from '../router/Router'
import { screenContainerStyle } from '../../design-system/screen-container.style'
import { Exercise } from './entities/exercise.entity'
import { GetExerciseUseCase } from './get-exercise.usecase'
import { InMemoryExerciseGateway } from './gateways/exercise.in-memory.gateway'

const getExerciseUseCase = new GetExerciseUseCase(new InMemoryExerciseGateway())

export default function ExerciseSettingsScreen({ navigation, route}: any) {
  const exerciseId = route.params.exerciseId

  const [exercise, setExercise] = useState<Exercise | undefined>(undefined)

  useEffect(() => {
    getExerciseUseCase.execute(exerciseId).then(_exercise =>
      setExercise(_exercise)
    )
    }
  )

  function goToHomeScreen() {
    navigation.navigate(Routes.HOME)
  }

  return !exercise ? <Text> Loading ... </Text> : (
    <View style={screenContainerStyle.container}>
      <Text style={styles.title}>{exercise.template.title}</Text>

      <Text style={styles.subTitle}>Number of sets</Text>
      <NumberSetter />

      <Text style={styles.subTitle}>Number of reps</Text>
      <NumberSetter />

      <Text style={styles.subTitle}>Inter sets rest time</Text>
      <RestTimeSetter />

      <Text style={styles.subTitle}>Final rest time</Text>
      <RestTimeSetter />

      <Button text={'Save Exercise Settings'} onPress={goToHomeScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: FontSize.HEADING_2,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: FontSize.HEADING_4,
  },
})

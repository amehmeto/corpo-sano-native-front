import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RestTimeSetter } from './components/RestTimeSetter'
import { NumberSetter } from './components/NumberSetter'
import { Button } from '../../design-system/Button'
import { FontSize } from '../../design-system/enums/font-size.enum'
import { Routes } from '../router/Router'
import { screenContainerStyle } from '../../design-system/screen-container.style'

export default function ExerciseSettingsScreen({ navigation }: any) {
  function goToHomeScreen() {
    navigation.navigate(Routes.HOME)
  }

  return (
    <View style={screenContainerStyle.container}>
      <Text style={styles.title}>Pull-ups</Text>

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

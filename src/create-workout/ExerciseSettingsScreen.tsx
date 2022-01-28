import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RestTimeSetter } from './RestTimeSetter'
import { NumberSetter } from './NumberSetter'
import { Button } from '../../design-system/Button'
import { FontSize } from '../../design-system/font-size.enum'

export default function ExerciseSettingsScreen({ navigation }: any) {
  function goToHomeScreen() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
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
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSize.HEADING_2,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: FontSize.HEADING_4,
  },
})

import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './SetsRunnerScreen.style'
import { SetRunnerRow } from './SetRunnerRow'
import { Button } from '../../design-system/Button'
import { SetsLabelHeader } from './SetsLabelHeader'

export default function SetsRunnerScreen() {
  const setsStatistics = [
    [4, 8, 9],
    [4, 8, 9],
    [4, 8, 9],
    [4, 8, 9],
    [4, 8, 9],
  ]
  const setRunnerRows = setsStatistics.map((set, index) => {
    const isRunning = index === 1
    return (
      <SetRunnerRow key={index} set={set} index={index} isRunning={isRunning} />
    )
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push-ups</Text>

      <SetsLabelHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        {setRunnerRows}
      </ScrollView>

      <Button style={styles.button} text={'Start Workout'} onPress={() => {}} />
    </View>
  )
}

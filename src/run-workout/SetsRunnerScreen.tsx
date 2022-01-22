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
  const setElement = setsStatistics.map((set, index) => {
    return <SetRunnerRow key={index} set={set} index={index} />
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push-ups</Text>

      <SetsLabelHeader />

      <ScrollView contentContainerStyle={styles.scroll}>
        {setElement}
      </ScrollView>

      <Button onPress={() => {}} />
    </View>
  )
}

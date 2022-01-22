import { Text, View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

type SetRunnerRowProps = { index: number; set: number[] }

export function SetRunnerRow({ set, index }: SetRunnerRowProps) {
  return (
    <View style={styles.setRow}>
      <Text style={styles.setTitle}>{index + 1}st set:</Text>
      <Text style={styles.performance}>{set[0]}</Text>
      <Text style={styles.performance}>{set[1]}</Text>
      <TextInput style={styles.newPerf}>{set[2]}</TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  setRow: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  performance: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
    fontSize: 28,
  },
  setTitle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  newPerf: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    margin: 20,
    fontSize: 28,
    textAlign: 'center',
    textDecorationStyle: 'solid',
    textDecorationColor: 'green',

    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: 'green',
  },
})

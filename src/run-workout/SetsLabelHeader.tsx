import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function SetsLabelHeader() {
  return (
    <View style={styles.labelsHeader}>
      <Text style={styles.label}>Last Session</Text>
      <Text style={styles.label}>Goal</Text>
      <Text style={styles.label}>Today</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  labelsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  label: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
  },
})

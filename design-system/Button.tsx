import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export function Button(props: { onPress: () => void }) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>Start workout</Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Colors } from './enums/colors.enum'

type ButtonProps = { text: string; onPress: any; additionalStyle?: {} }

export function Button({ text, onPress, additionalStyle = {} }: ButtonProps) {
  return (
    <Pressable style={[styles.button, additionalStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY_700,
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

import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from '../../design-system/Button'
import { FontSize } from '../../design-system/font-size.enum'
import { Colors } from '../../design-system/colors'
import { TextInputStyle } from '../../design-system/TextInput'

export function NumberSetter() {
  const [number, setNumber] = useState(0)

  function addNumber() {
    setNumber((prevNumber) => prevNumber + 1)
  }

  function subtractNumber() {
    setNumber((prevNumber) => prevNumber - 1)
  }

  return (
    <View style={styles.numberSetter}>
      <Button
        text={'-'}
        onPress={subtractNumber}
        additionalStyle={styles.button}
      />
      <TextInput style={[styles.number, TextInputStyle]}>{number}</TextInput>
      <Button text={'+'} onPress={addNumber} additionalStyle={styles.button} />
    </View>
  )
}

const styles = StyleSheet.create({
  numberSetter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    textAlign: 'center',
    fontSize: FontSize.HEADING_4,

    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 5,
  },
})

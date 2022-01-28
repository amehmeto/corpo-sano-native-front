import { Text, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import { FontSize } from '../../design-system/font-size.enum'
import { TextInputStyle } from '../../design-system/TextInput'

export function RestTimeSetter() {
  return (
    <View style={styles.numberSetter}>
      <TextInput style={[styles.number, TextInputStyle]} value={'3'} />
      <Text style={styles.number}>min</Text>
      <TextInput style={[styles.number, TextInputStyle]} value={'00'} />
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
    width: 60,
  },
})

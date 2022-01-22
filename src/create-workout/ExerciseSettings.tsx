import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

export default function ExerciseSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tractions</Text>

      <Text style={styles.subTitle}>Number of sets</Text>

      <View style={styles.numberSetter}>
        <TouchableOpacity onPress={() => {}}>
          <Text>-</Text>
        </TouchableOpacity>
        <TextInput style={styles.number}>1</TextInput>
        <TouchableOpacity onPress={() => {}}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subTitle}>Number of reps</Text>
      <View style={styles.numberSetter}>
        <TouchableOpacity onPress={() => {}}>
          <Text>-</Text>
        </TouchableOpacity>
        <TextInput style={styles.number}>2</TextInput>
        <TouchableOpacity onPress={() => {}}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subTitle}>Inter sets rest time</Text>
      <View style={styles.numberSetter}>
        <TextInput style={styles.number}>1</TextInput>
        <Text>min</Text>
        <TextInput style={styles.number}>5</TextInput>
      </View>
      <Text style={styles.subTitle}>Final rest time</Text>
      <View style={styles.numberSetter}>
        <TextInput style={styles.number}>1</TextInput>
        <Text>min</Text>
        <TextInput style={styles.number}>5</TextInput>
      </View>
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
    fontSize: 20,
  },
  subTitle: {
    fontWeight: 'bold',
  },
  numberSetter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    textAlign: 'center',
  },
})

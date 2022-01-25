import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../../App'

export default function CreateProgramScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()

  function goToEditWorkoutScreen() {
    navigation.navigate('EditWorkout')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a program</Text>

      <View style={styles.fields}>
        <TextInput style={styles.input} placeholder={'Name'} />
        <TextInput style={styles.input} placeholder={'Description'} />
      </View>

      <Button title={'Create workout'} onPress={goToEditWorkoutScreen} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: 'gray',
  },
  fields: {
    width: '80%',
    alignItems: 'stretch',
  },
})

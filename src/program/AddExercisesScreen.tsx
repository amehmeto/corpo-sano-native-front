import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function AddExercisesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add exercises</Text>

      <Text>Choose among the exercises below :</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.exercises}>
          <Text style={styles.selectedExercise}>Push up</Text>
          <Text style={styles.exercise}>Abs</Text>
          <Text style={styles.exercise}>Squat</Text>
          <Text style={styles.exercise}>Pull up</Text>
          <Text style={styles.exercise}>Push up</Text>
          <Text style={styles.exercise}>Abs</Text>
          <Text style={styles.exercise}>Squat</Text>
          <Text style={styles.exercise}>Pull up</Text>
          <Text style={styles.exercise}>Push up</Text>
          <Text style={styles.exercise}>Abs</Text>
          <Text style={styles.exercise}>Squat</Text>
          <Text style={styles.exercise}>Pull up</Text>
          <Text style={styles.exercise}>Push up</Text>
          <Text style={styles.exercise}>Abs</Text>
          <Text style={styles.exercise}>Squat</Text>
          <Text style={styles.exercise}>Pull up</Text>
        </View>
      </ScrollView>

      <Button title={'Create program'} onPress={() => {}} />
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
  exercises: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 10,
    minWidth: '60%',
  },
  exercise: {
    textAlign: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  scroll: {
    maxHeight: '60%',
  },
  selectedExercise: {
    textAlign: 'center',
    textDecorationColor: 'green',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: '#80ff80',
  },
})

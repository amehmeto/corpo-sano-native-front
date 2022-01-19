import { Button, StyleSheet, Text, View } from 'react-native'

export default function CreateProgramScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Corpo Sano</Text>
      <Text>No workout yet, create one!</Text>
      <Button title={'Create a program'} onPress={() => {}} />
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
})

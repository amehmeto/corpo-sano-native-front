import ProfileInformation from './ProfileInformation'
import Progression from './Progression'
import { StyleSheet, Text, View } from 'react-native'

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileInformation />
        <Progression />
      </View>
      <View style={styles.dailyTasks}>
        <Text style={styles.dailyTask}>Create your first program</Text>
        <Text style={styles.dailyTask}>Take your measurements</Text>
        <Text style={styles.dailyTask}>Weight yourself</Text>
        <Text style={styles.dailyTask}>Congrats Erkam kanka</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    height: '20%',
  },
  dailyTasks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  dailyTask: {
    padding: 10,
    paddingLeft: 30,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    width: '90%',
  },
})

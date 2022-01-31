import { StyleSheet, Text, View } from 'react-native'
import { Avatar, HStack } from 'native-base'

export default function ProfileInformation() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Arthur</Text>

      <View style={styles.biometrics}>
        <Text style={styles.biometricsData}>80 kg</Text>
        <Text style={styles.biometricsData}>35% b. fat</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    width: '20%',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  biometrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  biometricsData: {
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
  },
})

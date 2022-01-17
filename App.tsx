import { StatusBar, StyleSheet } from 'react-native'
import ProfileInformation from './src/home/ProfileInformation'
import { NativeBaseProvider, Box } from 'native-base'
import Progression from './src/home/Progression'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.header}>
          <ProfileInformation />
          <Progression />
        </Box>
        <Box>Hello world</Box>
      </Box>
      <StatusBar />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'red',
    height: '20%',
  },
})

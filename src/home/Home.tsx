import { Box } from 'native-base'
import ProfileInformation from './ProfileInformation'
import Progression from './Progression'
import { StyleSheet } from 'react-native'

export function Home() {
  return (
    <Box style={styles.container}>
      <Box style={styles.header}>
        <ProfileInformation />
        <Progression />
      </Box>
      <Box>Hello world</Box>
    </Box>
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

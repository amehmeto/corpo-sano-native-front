import { StyleSheet } from 'react-native'
import { Box, Progress, Text } from 'native-base'

export default function Progression() {
  return (
    <Box style={styles.container}>
      <Progress colorScheme="secondary" style={styles.bar} value={34} />
      <Box style={styles.barLabel}>
        <Text>3/22</Text>
        <Text>Program Lafay</Text>
      </Box>
      <Progress colorScheme="emerald" style={styles.bar} value={34} />
      <Box style={styles.barLabel}>
        <Text>4/22</Text>
        <Text>Assouplissement</Text>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  bar: {
    margin: 5,
    width: '100%',
  },
  barLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

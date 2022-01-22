import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'orange',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20,
  },
  scroll: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',

    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
})

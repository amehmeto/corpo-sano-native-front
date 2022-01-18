import { StyleSheet } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { Home } from './src/home/Home'
import { NavBar } from './src/home/NavBar'

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <Home />
        <NavBar />
      </NativeBaseProvider>
    </>
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

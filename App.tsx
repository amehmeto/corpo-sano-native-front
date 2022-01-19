import { NativeBaseProvider } from 'native-base'
import { NavBar } from './src/home/NavBar'
import CreateProgramScreen from './src/program/CreateProgramScreen'
import { StyleSheet, View } from 'react-native'
import { HomeScreen } from './src/home/HomeScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      {/*<HomeScreen />*/}
      <CreateProgramScreen />
      <NavBar />
    </NativeBaseProvider>
  )
}

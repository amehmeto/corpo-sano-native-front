import { NativeBaseProvider } from 'native-base'
import { NavBar } from './src/home/NavBar'
import React from 'react'
import { Router } from './src/router/Router'

export default function App() {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  )
}

import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Router } from './src/router/Router'
import TabRouter from './src/router/TabRouter'

export default function App() {
  return (
    <NativeBaseProvider>
      <TabRouter/>
    </NativeBaseProvider>
  )
}

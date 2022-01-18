import { StyleSheet } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { Tab, TabView, Text } from 'react-native-elements'
import { useState } from 'react'
import { Home } from './src/home/Home'

export default function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <NativeBaseProvider>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ width: '100%' }}>
            <Home />
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
            <Text h1>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
            <Text h1>Cart</Text>
          </TabView.Item>
        </TabView>
        <Tab
          value={index}
          onChange={(e) => {
            console.log('click amk' + e)
            setIndex(e)
          }}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Home"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="Progression"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="Workouts"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="Settings"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
        </Tab>
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

import React from 'react'
import { HomeScreen } from '../home/HomeScreen'
import Progression from '../home/components/Progression'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Router } from './Router'

const Tab = createBottomTabNavigator()

type ioniconsNames = 'home' | 'trending-up' | 'dumbbell'

const tabRoutes = [
  { name: 'Home', component: Router, iconName: 'home' as ioniconsNames },
  { name: 'Progression', component: Progression, iconName: 'trending-up' as ioniconsNames },
  { name: 'Workouts', component: Progression, iconName: 'dumbbell' as ioniconsNames },
  { name: 'Settings', component: Progression, iconName: 'settings' as 'settings' },

] as const

type TabSettings = {
  name: string
  iconName: ioniconsNames | 'settings'
  color: 'gray'
}

function generateTabIcon(tab: TabSettings) {
  const elementAttributes = {
    name: tab.iconName,
    size: tab.iconName === 'settings' ? 38.5 : 40,
    color: 'gray',
  }

  return tab.iconName === 'settings' ? (
    // @ts-ignore
    <Ionicons {...elementAttributes} />
  ) : (
    // @ts-ignore
    <MaterialCommunityIcons {...elementAttributes} />
  )
}

const tabScreens = tabRoutes.map((tabRoute) => {
  return (
    <Tab.Screen
      name={tabRoute.name}
      component={tabRoute.component}
      options={{
        tabBarIcon: () => (
          generateTabIcon({ name: tabRoute.name, iconName: tabRoute.iconName } as TabSettings)
        ),
        headerShown: false
      }}
    />
  )
})

function TabRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabScreens}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabRouter

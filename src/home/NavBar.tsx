import { StyleSheet, Text, View } from 'react-native'
import {
  Ionicons as Ionicons,
  MaterialCommunityIcons as MaterialCommunityIcons,
} from '@expo/vector-icons'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../../App'

type ioniconsNames = 'home' | 'trending-up' | 'dumbbell'

type Tab = {
  iconName: ioniconsNames | 'settings'
  name: string
  isSelected: boolean
}

export function NavBar() {
  const [menuTabs, setMenuTabs] = useState([
    {
      iconName: 'home' as ioniconsNames,
      name: 'Dashboard',
      isSelected: true,
    },
    {
      iconName: 'trending-up' as ioniconsNames,
      name: 'Progression',
      isSelected: false,
    },
    {
      iconName: 'dumbbell' as ioniconsNames,
      name: 'Workouts',
      isSelected: false,
    },
    {
      iconName: 'settings' as 'settings',
      name: 'Settings',
      isSelected: false,
    },
  ])

  function selectTab(index: number) {
    return () => {
      const newMenu = menuTabs.map((tab) => ({ ...tab, isSelected: false }))
      newMenu[index].isSelected = true
      setMenuTabs(newMenu)
    }
  }

  function generateTabIcon(tab: Tab, index: number) {
    const elementAttributes = {
      name: tab.iconName,
      size: tab.iconName === 'settings' ? 46.5 : 50,
      color: tab.isSelected ? 'green' : 'gray',
      onPress: selectTab(index),
    }
    return tab.iconName === 'settings' ? (
      // @ts-ignore
      <Ionicons {...elementAttributes} />
    ) : (
      // @ts-ignore
      <MaterialCommunityIcons {...elementAttributes} />
    )
  }

  const menuTabsElements = menuTabs.map((tab, index) => {
    const tabIcon = generateTabIcon(tab, index)
    return (
      <View key={index} style={styles.tab}>
        {tabIcon}
        <Text>{tab.name}</Text>
      </View>
    )
  })

  return <View style={styles.container}>{menuTabsElements}</View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
})

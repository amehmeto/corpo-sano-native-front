import { StyleSheet, Text, View } from 'react-native'
import {
  Ionicons as Ionicons,
  MaterialCommunityIcons as MaterialCommunityIcons,
} from '@expo/vector-icons'
import React, { useState } from 'react'

type ioniconsNames = 'home' | 'trending-up' | 'dumbbell'

type Tab = {
  iconName: ioniconsNames | 'settings'
  name: string
  isSelected: boolean
}

export function NavBar() {
  const [menuTabIcons, setMenuTabIcons] = useState([
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
      const newMenu = menuTabIcons.map((tab) => ({ ...tab, isSelected: false }))
      newMenu[index].isSelected = true
      setMenuTabIcons(newMenu)
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

  const menuTabsElements = menuTabIcons.map((tab, index) => {
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
    alignItems: 'flex-start',
  },
  tab: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
})

import { Pressable, StyleSheet, Text, View } from 'react-native'
import {
  Ionicons as Ionicons,
  MaterialCommunityIcons as MaterialCommunityIcons,
} from '@expo/vector-icons'
import React, { useState } from 'react'
import { Colors } from '../../../design-system/colors'
import { FontSize } from '../../../design-system/font-size.enum'

type ioniconsNames = 'home' | 'trending-up' | 'dumbbell'

type Tab = {
  iconName: ioniconsNames | 'settings'
  name: string
  isSelected: boolean
}
type NavBarProps = {
  navigation: any
}

// TODO: use React Active tintColor
// TODO: use Navigation Tab Navigator
export function NavBar() {
  const [menuTabs, setMenuTabs] = useState([
    {
      iconName: 'home' as ioniconsNames,
      name: 'Dashboard',
      isSelected: true,
      route: 'Home',
    },
    {
      iconName: 'trending-up' as ioniconsNames,
      name: 'Progression',
      isSelected: false,
      route: undefined,
    },
    {
      iconName: 'dumbbell' as ioniconsNames,
      name: 'Workouts',
      isSelected: false,
      route: undefined,
    },
    {
      iconName: 'settings' as 'settings',
      name: 'Settings',
      isSelected: false,
      route: undefined,
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
      size: tab.iconName === 'settings' ? 38.5 : 40,
      color: tab.isSelected ? Colors.PRIMARY_700 : 'gray',
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

  function goToHomeScreen() {}

  const menuTabsElements = menuTabs.map((tab, index) => {
    const tabIcon = generateTabIcon(tab, index)
    return (
      <Pressable key={index} style={styles.tab} onPress={goToHomeScreen}>
        {tabIcon}
        <Text style={styles.name}>{tab.name}</Text>
      </Pressable>
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
  name: {
    fontSize: FontSize.BODY_TEXT_VERY_SMALL,
  },
})

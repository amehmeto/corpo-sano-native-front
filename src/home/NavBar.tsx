import { StyleSheet, Text, View } from 'react-native'
import {
  Ionicons as Icons,
  MaterialCommunityIcons as Icons2,
} from '@expo/vector-icons'
import React, { useState } from 'react'

export function NavBar() {
  const [menuTabIcons, setMenuTabIcons] = useState([
    {
      iconName: 'home' as 'home',
      name: 'Dashboard',
      isSelected: false,
    },
    {
      iconName: 'trending-up' as 'trending-up',
      name: 'Progression',
      isSelected: false,
    },
    {
      iconName: 'dumbbell' as 'dumbbell',
      name: 'Workouts',
      isSelected: false,
    },
    {
      iconName: 'settings' as 'settings',
      name: 'Settings',
      isSelected: false,
    },
  ])

  function selectedTab(index: number) {
    return () => {
      const newMenu = menuTabIcons.map((tab) => ({ ...tab, isSelected: false }))
      newMenu[index].isSelected = true
      setMenuTabIcons(newMenu)
    }
  }

  const menuTabsElements = menuTabIcons.map((element, index) => {
    const elementAttributes = {
      name: element.iconName,
      size: element.iconName === 'settings' ? 46.5 : 50,
      color: element.isSelected ? 'green' : 'gray',
      onPress: selectedTab(index),
    }

    const iconType =
      element.iconName === 'settings' ? (
        // @ts-ignore
        <Icons {...elementAttributes} />
      ) : (
        // @ts-ignore
        <Icons2 {...elementAttributes} />
      )

    return (
      <View key={index} style={styles.tab}>
        {iconType}
        <Text>{element.name}</Text>
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

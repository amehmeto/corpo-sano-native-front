import { StyleSheet, Text, View } from 'react-native'
import {
  Ionicons as Icons,
  MaterialCommunityIcons as Icons2,
} from '@expo/vector-icons'
import { useState } from 'react'

export function NavBar() {
  const [tab, setTab] = useState(false)
  const menuTabIcons = [
    {
      iconName: 'home' as 'home',
      name: 'Dashboard',
    },
    {
      iconName: 'trending-up' as 'trending-up',
      name: 'Progression',
    },
    {
      iconName: 'dumbbell' as 'dumbbell',
      name: 'Workouts',
    },
  ]

  const tabColor = tab ? 'green' : 'gray'

  const menuTabsElements = menuTabIcons.map((element, index) => {
    return (
      <View key={index} style={styles.tab}>
        <Icons2
          name={element.iconName}
          size={50}
          color={tabColor}
          onPress={() => setTab(true)}
        />
        <Text>{element.name}</Text>
      </View>
    )
  })
  return (
    <View style={styles.container}>
      {menuTabsElements}
      <View style={styles.tab}>
        <Icons name="settings" size={46.5} color={tabColor} />
        <Text>Settings</Text>
      </View>
    </View>
  )
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

import ProfileInformation from './ProfileInformation'
import Progression from './Progression'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavBar } from './NavBar'
import { dailyTasksFakeData } from './repositories/home.fake-data.repository'

export function HomeScreen({ navigation }: any) {
  function goTo(route: string) {
    navigation.navigate(route)
  }

  const dailyTasksElements = dailyTasksFakeData.map((task, index) => {
    return (
      <Pressable
        key={index}
        style={styles.dailyTask}
        onPress={() => goTo(task.route)}
      >
        <Text>{task.description}</Text>
      </Pressable>
    )
  })
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileInformation />
          <Progression />
        </View>
        <View style={styles.dailyTasks}>{dailyTasksElements}</View>
      </View>
      <NavBar />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    height: '20%',
  },
  dailyTasks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  dailyTask: {
    padding: 10,
    paddingLeft: 30,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    width: '90%',
  },
})

import ProfileSummary from './components/ProfileSummary'
import Progression from './components/Progression'
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { NavBar } from './components/NavBar'
import {
  DailyTask,
  dailyTasksFakeData,
} from './repositories/home.fake-data.repository'

export function HomeScreen({ navigation }: any) {
  const renderDailyTask: ListRenderItem<DailyTask> = ({
    item: dailyTask,
  }: ListRenderItemInfo<DailyTask>) => {
    return (
      <Pressable
        style={styles.dailyTask}
        onPress={() => navigation.navigate(dailyTask.route)}
      >
        <Text>{dailyTask.description}</Text>
      </Pressable>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileSummary />
          <Progression />
        </View>
        <FlatList
          data={dailyTasksFakeData}
          renderItem={renderDailyTask}
          keyExtractor={(item) => item.id}
        />
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

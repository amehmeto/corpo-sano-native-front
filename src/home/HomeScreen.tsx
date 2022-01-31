import ProfileSummary from './components/ProfileSummary'
import Progression from './components/Progression'
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { DailyTask } from './gateways/home.fake-data.repository'
import { GetAthleteUseCase } from './use-cases/get-athlete.use-case'
import { AthleteGateway } from './gateways/athlete.gateway.interface'
import { InMemoryAthleteGateway } from './gateways/athlete.in-memory.gateway'
import { Athlete } from './entities/athlete.entity'

const athleteGateway: AthleteGateway = new InMemoryAthleteGateway()
const getAthleteUseCase = new GetAthleteUseCase(athleteGateway)

export function HomeScreen({ navigation }: any) {
  const [athlete, setAthlete] = useState(null as Athlete | null)

  useEffect(() => {
    if (!athlete) getAthlete()
  }, [])

  const getAthlete = async () => {
    const retrievedAthlete = await getAthleteUseCase.execute('uuid from login')
    setAthlete(retrievedAthlete)
  }

  const renderDailyTask = ({
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

  const { dailyTasks } = athlete || {}

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileSummary />
          <Progression />
        </View>
        <FlatList
          data={dailyTasks}
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

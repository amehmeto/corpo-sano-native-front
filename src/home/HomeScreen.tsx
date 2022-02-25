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
import { DailyTask } from './gateways/home.fake-data.repository'
import { GetAthleteUseCase } from './usecases/get-athlete.use-case'
import { AthleteGateway } from './gateways/athlete.gateway.interface'
import { InMemoryAthleteGateway } from './gateways/athlete.in-memory.gateway'
import { Athlete } from './entities/athlete.entity'
import { Margin } from '../../design-system/enums/margin.enum'

const athleteGateway: AthleteGateway = new InMemoryAthleteGateway()
const getAthleteUseCase = new GetAthleteUseCase(athleteGateway)

export function HomeScreen({ navigation }: any) {
  const athleteId = 'asfdadsfas'

  const [athlete, setAthlete] = useState<Athlete | undefined>(undefined)

  useEffect(() => {
    getAthleteUseCase.execute(athleteId).then((_athlete) => {
      setAthlete(_athlete)
    })
  }, [])

  const renderDailyTask = ({
    item: dailyTask,
  }: ListRenderItemInfo<DailyTask>) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate(dailyTask.route)}
    >
      <Text>{dailyTask.description}</Text>
    </Pressable>
  )

  return (
    <>
      <View style={styles.container}>
        {athlete ? (
          <>
            <View style={styles.header}>
              <ProfileSummary athlete={athlete} />
              <Progression />
            </View>
            <FlatList
              data={athlete.dailyTasks}
              renderItem={renderDailyTask}
              keyExtractor={(item) => item.id}
            />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: Margin.MEDIUM,
    flex: 1,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'red',
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
  card: {
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

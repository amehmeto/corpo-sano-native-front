import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams, Routes } from '../router/Router'
import { Button } from '../../design-system/Button'
import { Workout } from './entities/workout.entity'
import { workoutDataBuilder } from '../_data-builders/workout.data-builder'
import { Card } from '../../design-system/Card'
import { Margin } from '../../design-system/enums/margin.enum'
import { FontSize } from '../../design-system/enums/font-size.enum'

type ProgramPreviewProps = NativeStackScreenProps<
  RouteParams,
  Routes.PROGRAM_PREVIEW
>

export default function ProgramPreviewScreen({
  route,
  navigation,
}: ProgramPreviewProps) {
  const programTitle = route.params.title
  const programDescription = route.params.description
  const programId = route.params.programId

  const programWorkouts = [
    workoutDataBuilder(),
    workoutDataBuilder(),
    workoutDataBuilder(),
    workoutDataBuilder(),
  ] as Workout[] // should come from the server

  const renderWorkoutPreview = ({
    item: workout,
  }: ListRenderItemInfo<Workout>) => {
    return (
      <Card
        style={styles.workoutPreview}
        onPress={() => {}}
        text={workout.title}
      />
    )
  }

  function goToCreateWorkout() {
    navigation.navigate(Routes.CREATE_WORKOUT, {
      programId,
    })
  }

  const workoutPreviewElements =
    programWorkouts.length > 0 ? (
      <FlatList
        style={styles.workoutPreviewList}
        data={programWorkouts}
        renderItem={renderWorkoutPreview}
        keyExtractor={(item) => item.id}
      />
    ) : (
      <Text>{'Your program is empty. Add one or several workout now'}</Text>
    )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{programTitle}</Text>

      <Text style={styles.description}>{programDescription}</Text>

      {workoutPreviewElements}

      {/*<ScrollView style={styles.scroll}>
        <View style={styles.exercises} />
      </ScrollView>*/}

      <Button text={'Add a workout'} onPress={goToCreateWorkout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSize.HEADING_4,
    margin: Margin.LARGE,
  },
  description: {
    margin: Margin.LARGE,
  },
  workoutPreview: {
    margin: Margin.MEDIUM,
    width: '50%',
  },
  workoutPreviewList: {
    width: '100%',
  },
})

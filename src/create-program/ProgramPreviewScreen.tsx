import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
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
import { Padding } from '../../design-system/enums/padding.enum'
import { faker } from '@faker-js/faker'

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
  const numberOfExercises = faker.datatype.number({ min: 1, max: 10 })

  const programWorkouts = [
    workoutDataBuilder(),
    workoutDataBuilder(),
    workoutDataBuilder(),
    workoutDataBuilder(),
  ] as Workout[] // should come from the server

  const renderWorkoutPreview = ({
    item: workout,
  }: ListRenderItemInfo<Workout>) => {
    const dayInitials = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const dayInitialElements = dayInitials.map((initial, index) => (
      <Text key={index} style={styles.dayInitial}>
        {initial}
      </Text>
    ))
    return (
      <Pressable style={styles.workoutPreview} onPress={() => {}}>
        <Text style={styles.workoutTitle}>{workout.title}</Text>
        <Text>{`${numberOfExercises} exercises`}</Text>
        <View style={styles.dayInitialContainer}>{dayInitialElements}</View>
      </Pressable>
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
    padding: Padding.MEDIUM,
    flexGrow: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
  },
  workoutPreviewList: {
    width: '100%',
  },
  dayInitial: {
    fontSize: FontSize.BODY_TEXT_EXTRA_SMALL,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    color: 'white',
    textTransform: 'uppercase',
    margin: Margin.SMALL,
    marginLeft: Margin.NONE,
    marginBottom: Margin.NONE,
    padding: Padding.EXTRA_SMALL,
    borderRadius: 2,
    width: 15,
    textAlign: 'center',
  },
  dayInitialContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  workoutTitle: { fontWeight: 'bold', marginBottom: Margin.SMALL },
})

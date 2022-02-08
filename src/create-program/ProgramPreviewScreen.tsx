import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteParams, Routes } from '../router/Router'
import { Button } from '../../design-system/Button'
import { Workout } from './entities/workout.entity'
import { Margin } from '../../design-system/enums/margin.enum'
import { FontSize } from '../../design-system/enums/font-size.enum'
import { determineDayInitialStyle } from './use-cases/determine-schedule-days-initial-style.handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Padding } from '../../design-system/enums/padding.enum'
import { Program } from './entities/program.entity'
import { GetProgramUseCase } from './use-cases/get-program.use-case'
import { programGateway } from '../di-container.experiment'

const getProgramUseCase = new GetProgramUseCase(programGateway)

type ProgramPreviewProps = NativeStackScreenProps<
  RouteParams,
  Routes.PROGRAM_PREVIEW
>

export default function ProgramPreviewScreen({
  route,
  navigation,
}: ProgramPreviewProps) {
  const programId = route.params.programId

  const [program, setProgram] = useState<Program | undefined>(undefined)

  useEffect(() => {
    getProgramUseCase.execute(programId).then((_program) => {
      setProgram(_program)
    })
  })

  function goToCreateWorkout() {
    navigation.navigate(Routes.CREATE_WORKOUT, {
      programId,
    })
  }

  const renderWorkoutPreview = ({
    item: workout,
  }: ListRenderItemInfo<Workout>) => {
    const dayInitials = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

    const dayInitialElements = dayInitials.map((initial, index) => {
      const dayInitialStyle = determineDayInitialStyle(workout, index)
      return (
        <Text key={index} style={dayInitialStyle}>
          {initial}
        </Text>
      )
    })
    return (
      <Pressable style={styles.workoutPreview}>
        <View style={styles.titleAndEditIcons}>
          <Text style={styles.workoutTitle}>{workout.title}</Text>
          <View style={styles.editIcons}>
            <Pressable onPress={() => navigation.navigate(Routes.HOME)}>
              <MaterialCommunityIcons
                name={'square-edit-outline'}
                size={20}
                color={'gray'}
              />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons
                name={'delete-outline'}
                size={20}
                color={'gray'}
              />
            </Pressable>
          </View>
        </View>
        <Text>{`${workout.exercises.length} exercises`}</Text>
        <View style={styles.dayInitialContainer}>{dayInitialElements}</View>
      </Pressable>
    )
  }

  const workoutPreviewElements =
    program && program.workouts && program.workouts.length > 0 ? (
      <FlatList
        style={styles.workoutPreviewList}
        data={program.workouts}
        renderItem={renderWorkoutPreview}
        keyExtractor={(item) => item.id}
      />
    ) : (
      <Text>{'Your program is empty. Add one or several workout now'}</Text>
    )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{program?.title}</Text>

      <Text style={styles.description}>{program?.description}</Text>

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

  workoutPreviewList: {
    width: '100%',
  },
  workoutPreview: {
    margin: Margin.MEDIUM,
    padding: Padding.MEDIUM,
    flexGrow: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
  },
  workoutTitle: { fontWeight: 'bold', marginBottom: Margin.SMALL },
  dayInitialContainer: {
    flexDirection: 'row',
  },
  titleAndEditIcons: { flexDirection: 'row', justifyContent: 'space-between' },
  editIcons: { flexDirection: 'row', justifyContent: 'flex-end' },
})

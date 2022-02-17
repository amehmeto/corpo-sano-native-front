import {
  FlatList,
  ListRenderItemInfo,
  Modal,
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
import { Padding } from '../../design-system/enums/padding.enum'
import { Program } from './entities/program.entity'
import { GetProgramUseCase } from './use-cases/get-program.use-case'
import { programGateway } from '../di-container.experiment'
import { WorkoutPreviewCard } from './components/WorkoutPreviewCard'
import { DeleteWorkoutUseCase } from './use-cases/remove-workout.use-case'

const getProgramUseCase = new GetProgramUseCase(programGateway)
const deleteWorkoutUseCase = new DeleteWorkoutUseCase(programGateway)

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
  const [isRemoveModalVisible, setIsRemoveModalVisible] =
    useState<boolean>(false)
  const [removeModalWorkoutId, setRemoveModalWorkoutId] = useState<
    string | undefined
  >(undefined)

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
      const dayInitialStyle = determineDayInitialStyle(workout)
      return (
        <Text key={index} style={dayInitialStyle}>
          {initial}
        </Text>
      )
    })
    return (
      <WorkoutPreviewCard
        workout={workout}
        navigate={() => {
          navigation.navigate(Routes.EDIT_WORKOUT, {
            workoutId: workout.id,
          })
        }}
        openDeleteModal={() => {
          setRemoveModalWorkoutId(workout.id)
          setIsRemoveModalVisible(true)
        }}
        dayInitials={dayInitialElements}
      />
    )
  }

  return !program ? (
    <Text>Loading...</Text>
  ) : (
    <View style={styles.container}>
      <FlatList
        style={styles.workoutPreviewList}
        data={program.workouts}
        renderItem={renderWorkoutPreview}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>{program.title}</Text>
            <Text style={styles.description}>{program.description}</Text>
          </>
        }
        ListEmptyComponent={
          <Text>{'Your program is empty. Add one or several workout now'}</Text>
        }
      />

      <Button text={'Add a workout'} onPress={goToCreateWorkout} />

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isRemoveModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.deleteWorkoutModal}>
            <Text style={styles.deleteWorkoutModalQuestion}>
              {'Remove this workout from the program?'}
            </Text>
            <View style={styles.deleteWorkoutModalButtons}>
              <Button
                style={[styles.deleteWorkoutModalButton, styles.cancelButton]}
                text={'Cancel'}
                onPress={() => setIsRemoveModalVisible(false)}
              />
              <Button
                style={[styles.deleteWorkoutModalButton, styles.deleteButton]}
                text={'Remove'}
                onPress={async () => {
                  await deleteWorkoutUseCase.execute(
                    programId,
                    removeModalWorkoutId!,
                  )
                  setIsRemoveModalVisible(false)
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteWorkoutModal: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  deleteWorkoutModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Margin.LARGE,
  },
  deleteWorkoutModalQuestion: {
    margin: Margin.LARGE,
  },
  deleteWorkoutModalButton: {
    borderRadius: 5,
    paddingVertical: Padding.SMALL,
    paddingHorizontal: Padding.LARGE,
  },
  cancelButton: {
    backgroundColor: 'grey',
    marginRight: Margin.LARGE,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
})

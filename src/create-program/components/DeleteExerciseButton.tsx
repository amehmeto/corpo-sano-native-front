import { Routes } from '../../router/Router'
import { Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

export function DeleteExerciseButton(props: { openDeleteModal: () => void }) {
  return (
    <Pressable onPress={props.openDeleteModal}>
      <MaterialCommunityIcons
        name={'delete-outline'}
        size={20}
        color={'gray'}
      />
    </Pressable>
  )
}

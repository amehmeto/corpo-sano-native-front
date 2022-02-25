import { Routes } from '../../routers/Router'
import { Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

export function EditExerciseButton(props: { onPress: () => void }) {
  return (
    <Pressable onPress={props.onPress}>
      <MaterialCommunityIcons
        name={'square-edit-outline'}
        size={20}
        color={'gray'}
      />
    </Pressable>
  )
}

import { Image, StyleSheet } from 'react-native'
import DefaultAvatar from '../assets/default-profile-photo.png';
import * as React from 'react'

type AvatarProps = {
  source: string
}

export function Avatar({ source }: AvatarProps) {
  if(!source) source = DefaultAvatar
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: source,
      }}
    />
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
})

import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function info() {
  return (
    <View>
      <Text className='font-bold text-orange-300 '>info page is here</Text>

      <Pressable  onPress={()=>router.back()}>
        <Text>click me to go back</Text>
      </Pressable>
    </View>
  )
}
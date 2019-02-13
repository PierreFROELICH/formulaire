import React from 'react'
import { View, TextInput, Text } from 'react-native'

const TextField = props => (
  <View>
    <TextInput/>
    props.error ? {props.error} : null
  </View>
)

export default TextField

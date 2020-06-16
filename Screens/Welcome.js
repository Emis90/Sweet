import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window')

const Welcome = ({ navigation }) => {

  return (
    <View
      style={{
        height,
        width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        paddingTop: '20%',
        paddingBottom: '10%'
      }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Welcome to Sweet Talk
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate({ name: "Steet Talk" })}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          NEXT >>
        </Text>
      </TouchableOpacity>
    </View >
  )
}

export default Welcome
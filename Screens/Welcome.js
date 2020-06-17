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
        Welcome to Goodie
      </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20 }}>
        The app that allows you to esplore the best sweet spots in NYC
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate({ name: "Login" })}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome
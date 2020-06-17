import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../styles/screens.styles'

const Welcome = ({ navigation }) => {
  return (
    <View
      style={styles.welcomeContainer}>
      <Text style={styles.welcomeTxt}>
        Welcome to Goodie
      </Text>
      <Text style={styles.welcomeTxt}>
        The app that allows you to esplore the best sweet spots in NYC
      </Text>
      <TouchableOpacity onPress={() => { navigation.navigate({ name: "Login" }) }
      }>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome
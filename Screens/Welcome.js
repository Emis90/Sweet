import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../styles/screens.styles'
import * as SecureStore from 'expo-secure-store'

const Welcome = ({ navigation }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    (async () => {
      let user = await SecureStore.getItemAsync('user')
      if (user) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    })()
  })
  return (
    <View
      style={styles.welcomeContainer}>
      <Text style={styles.welcomeTxt}>
        Welcome to Goodie
      </Text>
      <Text style={styles.welcomeTxt}>
        The app that allows you to esplore the best sweet spots in NYC
      </Text>
      <TouchableOpacity onPress={() => {
        open && open ? navigation.navigate({ name: "Home" }) : navigation.navigate({ name: "Login" })
      }
      }>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome
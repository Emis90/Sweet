import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import styles from '../styles/screens.styles'

const Home = ({ navigation }) => {
  const logMeOut = async () => {
    await SecureStore.deleteItemAsync('user')
    navigation.navigate('Welcome')
  }
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => logMeOut()}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Home
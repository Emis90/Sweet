import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
// import * as myFirebase from 'firebase'
import * as firebase from 'firebase'
import styles from '../styles/screens.styles'

const Home = ({ navigation }) => {
  const signOutUser = async () => {
    try {
      await firebase
        .auth()
        .signOut()
      navigation.navigate({ name: "Login" })
    } catch (error) {
      console.log('could not sign out')
    }
  }
  return (
    <View style={styles.containerHome}>
      <View>
        <Image
          style={styles.homeHeader}
          source={{ url: "https://www.sugarsaltmagic.com/wp-content/uploads/2017/06/Strawberry-Flan-1.jpg" }} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => signOutUser()}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default Home


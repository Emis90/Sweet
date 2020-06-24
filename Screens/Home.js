import React, { useState, useEffect } from 'react'
import { View, Text, Linking, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { weatherApi } from '../secret'
import * as firebase from 'firebase'
import styles from '../styles/screens.styles'
import axios from 'axios'
const { height, width } = Dimensions.get('window')

const Home = ({ navigation }) => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=queens&appid=${weatherApi}`)
      let temp = ((data.main.temp - 273) * (9 / 5)) + 32
      let today = new Date();
      let date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
      setWeather({
        id: data.id,
        weather: data.weather[0].description,
        temp: temp.toFixed(2),
        date
      })
    })()
  }, [])
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
    <View>
      <ImageBackground
        source={require('../assets/macaroon.png')}
        style={{ height, width: '100%' }}
        style={styles.containerHome}>
        {weather &&
          <TouchableOpacity
            style={styles.weather}
            onPress={() => Linking.openURL('https://weather.com/weather/today/l/40.78,-73.92?par=google&temp=f')}>
            <View>
              <Text style={{ color: 'white', alignSelf: 'center' }}>{weather.date}</Text>
              <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>The weather today</Text>
              <Text style={{ fontSize: 22, color: 'white' }}>{weather.weather}</Text>
              <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>{weather.temp} deg</Text>
            </View>
          </TouchableOpacity>
        }
        <View>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => signOutUser()}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )

}

export default Home


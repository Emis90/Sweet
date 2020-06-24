import React, { useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import * as firebase from '../firebase/firebase'
import { config } from "../firebase/config";
const { width, height } = Dimensions.get('window')


const Welcome = ({ navigation }) => {
  useEffect(() => {
    firebase.FirebaseWrapper.GetInstance().Initialize(config);
  }, [])
  return (
    <View>
      <ImageBackground source={require('../assets/donuts.png')} style={{ height, width }}>
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height, justifyContent: 'space-between', paddingTop: 60 }}>
          <Text style={{ fontSize: 40, color: 'white', fontWeight: '700' }}>GOODIE</Text>
          <TouchableOpacity
            style={{ height: 200, marginVertical: 50 }}
            onPress={() => { navigation.navigate({ name: "Login" }) }
            }>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              NEXT
        </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View >
  )
}

export default Welcome
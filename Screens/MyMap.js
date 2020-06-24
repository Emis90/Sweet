// import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { bakeries } from '../locations';
import { config } from '../firebase/config'
import * as firebase from '../firebase/firebase'
import * as authFirebase from 'firebase'

const MyMap = () => {
  const [businesses, setBusinesses] = useState([])
  useEffect(() => {
    setBusinesses(bakeries)
  }, [])

  const addToList = async (name) => {
    try {
      let user = await authFirebase.auth().currentUser
      let res = await firebase.FirebaseWrapper.GetInstance().getAllPlaces()
      console.log(res)
    } catch (error) {
      console.log('something went wrong posting >>', error)
    }
  }
  return (
    <View style={{ justifyContent: 'flex-start', backgroundColo: '#87CEFA', height: '100%' }}>
      <MapView
        style={{ paddingHorizontal: 5, height: '100%' }}
        initialRegion={{
          latitude: 40.7293,
          longitude: -73.9883,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
          showsUserLocation: true,
          showsCompass: true,
          zoomControlEnabled: true
        }}
      >
        {
          businesses && businesses.length > 0 ? businesses.map((onebiz, i) => {
            return <Marker
              key={i}
              coordinate={{
                latitude: onebiz.coordinates.latitude,
                longitude: onebiz.coordinates.longitude,
              }}
              pinColor="pink"
            >
              <Callout style={{ alignItems: 'center' }} onPress={() => addToList(onebiz.name)}>
                <Text style={{ fontSize: 16 }}>{onebiz.name}</Text>
                <TouchableOpacity
                  style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/heart.png')} style={{ height: 20, width: 20 }} />
                  <Text style={{ color: 'red' }}>++</Text>
                </TouchableOpacity>
              </Callout>
            </Marker>
          })
            : null
        }

      </MapView>
    </View>
  );
};

export default MyMap

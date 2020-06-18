// import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { bakeries } from '../locations';
// import { mapApi } from '../secrets'

const MyMap = () => {
  const [businesses, setBusinesses] = useState([])
  useEffect(() => {
    setBusinesses(bakeries)
  }, [])
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
          zoomControlEnabled: true,

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
              <Callout>
                <Text style={{ fontSize: 16 }}>{onebiz.name}</Text>
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

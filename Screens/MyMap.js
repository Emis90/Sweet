// import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { mapApi } from '../secrets'

const MyMap = () => {
  const [myLocation, setMyLocation] = useState(null);

  const onSuccess = position => {
    const myPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy,
      headings: position.coords.heading,
      speed: position.coords.speed,
    };
    setMyLocation(myPosition);
  };
  const onError = error => {
    alert(`code: ${error.code}\n` + `message: ${error.message}\n`);
  };
  const getLoc = () => {
    return navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };
  useEffect(() => {
    getLoc();
  }, []);

  return (
    <View style={{ justifyContent: 'flex-start', backgroundColo: '#87CEFA', height: '100%' }}>
      {myLocation && myLocation ? (
        <MapView
          style={{ paddingHorizontal: 5, height: '100%' }}
          initialRegion={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
            showsUserLocation: true,
            showsCompass: true,
            zoomControlEnabled: true,

          }}
        >
          <Marker
            coordinate={{
              latitude: myLocation.latitude,
              longitude: myLocation.longitude,
            }}
            pinColor="lightblue"
          />
        </MapView>
      ) : null}
    </View>
  );
};

export default MyMap

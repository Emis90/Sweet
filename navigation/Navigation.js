import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import Welcome from '../Screens/Welcome'
import Login from '../Screens/Login'
import NewsScreen from '../Screens/NewsScreen'
import MyMap from '../Screens/MyMap'
import List from '../Screens/List'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
import TabIcons from '../Components/TabIcons'
import * as SecureStore from 'expo-secure-store'
const Root = () => {
  const [open, setOpen] = useState(false)
  console.log('effect running ')
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
  const TabNavigator = () => {
    return (
      <Tab.Navigator headerMode="none">
        <Tab.Screen
          name="Home"
          color="orange"
          component={Home}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="orange" name={Platform.OS === 'ios' ? 'ios-sunny' : 'md-home'} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="#6495ED" name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
            ),
          }} />
        <Tab.Screen
          name="Map"
          component={MyMap}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="#6B8E23" name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
            ),
          }} />
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="#FF69B4" name={Platform.OS === 'ios' ? 'ios-ice-cream' : 'md-ice-cream'} />
            ),
          }} />
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator initialRouteName={open && open ? "Home" : "Welcome"} headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}


const Container = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}



export default Container
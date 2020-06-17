import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import Welcome from '../Screens/Welcome'
import Login from '../Screens/Login'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

const Root = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    (async () => {
      let user = await SecureStore.getItemAsync('user')
      if (user) {
        setOpen(!open)
      }
    })
  }, [])

  return (
    <Stack.Navigator initialRouteName={open ? "Home" : "Welcome"} headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Steet Talk" component={TabNavigator} />
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
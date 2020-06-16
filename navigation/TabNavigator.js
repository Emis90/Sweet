import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import Welcome from '../Screens/Welcome'

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
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Steet Talk" component={TabNavigator} />
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
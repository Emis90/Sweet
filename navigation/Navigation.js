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
const Root = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator headerMode="none">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="#00cc66" name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
            ),
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="#ff9933" name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
            ),
          }} />
        <Tab.Screen
          name="Map"
          component={MyMap}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="gold" name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
            ),
          }} />
        {/* <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarIcon: ({ }) => (
              <TabIcons color="#ff99cc" name={Platform.OS === 'ios' ? 'ios-ice-cream' : 'md-ice-cream'} />
            ),
          }} /> */}
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
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
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/screens.styles'

const List = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeTxt}>Top favorites</Text>
    </View>
  )
}

export default List
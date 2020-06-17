import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      color={props.color}
      name={props.name}
      size={props.size ? props.size : 26}
      style={{ marginBottom: -3 }}
      // color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      onPress={props.onPress}
    />
  );
}

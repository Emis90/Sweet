import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import styles from '../styles/screens.styles'
import * as firebase from 'firebase'

const Login = ({ navigation }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const create = async (email, password) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => console.log('user created!'));
      navigation.navigate({ name: "Home" })
    } catch (error) {
      alert('Could not create: user already exists, try sining in instead ', error)
    }
  };
  const logIn = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => console.log('user logged in!'));
      navigation.navigate({ name: "Home" })
    } catch (error) {
      alert('Could not login: wrong credentials, try again', error)
    }

  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text style={styles.intro}>Login / Sign</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="white"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          onChangeText={(word) => setCredentials({ ...credentials, email: word })}
          value={credentials.email}
          enu
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="white"
          secureTextEntry={true}
          returnKeyType="go"
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          onChangeText={(word) => setCredentials({ ...credentials, password: word })}
          value={credentials.password}
        />
        <TouchableOpacity style={styles.input}>
          <Text style={styles.buttonText} onPress={() => {
            logIn(credentials.email, credentials.password)
          }}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontWeight: 'bold', paddingBottom: 7 }}>OR</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.buttonText} onPress={() => {
            create(credentials.email, credentials.password)
          }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}


export default Login
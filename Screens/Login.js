import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Dimensions
} from 'react-native'
import styles from '../styles/screens.styles'
import { FirebaseWrapper } from "../firebase/firebase";
import { firebaseConfig } from "../firebase/config";
import * as SecureStore from 'expo-secure-store'
import * as firebase from 'firebase'

const Login = ({ navigation }) => {
  const [user, setUpUser] = useState(null)
  const [credentials, setCredentials] = useState({ email: 'eni@gmail.com', password: '12345678' })

  useEffect(() => {
    FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
  }, [])
  const create = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log('user created!', res.user.apiKey);
        await SecureStore.setItemAsync('user', res.user.email)
        navigation.navigate({ name: "Home" })
      })
      .catch(err => console.log(err))
  };
  const logIn = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        await SecureStore.setItemAsync('user', 'logged')
        navigation.navigate({ name: "Home" })
      })
      .catch(err => alert('Wrong credentials, or user does not exist! Try again'))

  };

  // const changeText = (e) => {
  //   // setCredentials({ ...credentials, [e.target.name]: e.target.value })
  //   console.log('credentials ', e)
  // }

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text style={styles.intro}>Login or Sign up to discover places</Text>
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
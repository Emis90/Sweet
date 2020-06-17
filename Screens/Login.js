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
const { width, height } = Dimensions.get('window')
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
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          console.log('user created!', res.user.apiKey);
          await SecureStore.setItemAsync('user', res.user.email)
        })
      navigation.navigate({ name: "Steet Talk" })
    } catch (error) {
      console.log(error)
    }

  };

  const logIn = async (email, password) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async () => {
          await SecureStore.setItemAsync('user', 'logged')
        })
      navigation.navigate({ name: "Steet Talk" })
    } catch (error) {
      console.log('did not login err: ', error)
    }

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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height,
    width,
    flexDirection: 'column',
    backgroundColor: "#ffffb3",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    textAlign: "center",
    width: 250,
    height: 70,
    backgroundColor: "#ff99dd",
    marginBottom: 20,
    color: "white",
    paddingHorizontal: 2,
    fontSize: 20,
    borderRadius: 5
  },
  buttonContainer: {
    width: 200,
    height: 70,
    backgroundColor: "#1088EB",
    paddingHorizontal: 10
  },
  intro: {
    fontSize: 20,
    color: "#ff99dd",
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: 'white',
    marginTop: 20,
    paddingVertical: 5,
    fontSize: 20,
  },
  containerHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  button: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  buttonContainer: {
    paddingRight: 5
  }

})

export default Login
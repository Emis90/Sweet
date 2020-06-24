import { StyleSheet, Dimensions } from 'react-native';
import { UrlTile } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    display: 'flex',
    height,
    width,
    flexDirection: 'column',
    backgroundColor: "#98FB98",
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerHome: {
    display: 'flex',
    height,
    width,
    flexDirection: 'column',
    backgroundColor: "#87CEFA",//blue
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
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'white'
  },
  buttonContainer: {
    width: 200,
    height: 70,
    backgroundColor: "#1088EB",
    paddingHorizontal: 10
  },
  intro: {
    fontSize: 20,
    color: "grey",
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: 'white',
    marginTop: 18,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  welcomeContainer: {
    height,
    width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FCFC85',
    paddingTop: '20%',
    paddingBottom: '10%'
  },
  welcomeTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20
  },
  homeHeader: {
    height: height * .35,
    width,
    paddingTop: 5,
    backgroundColor: 'white'
  },
  newsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ff99dd',
    height,
    paddingTop: 50,
    paddingBottom: 70
  },
  logout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: "#87CEFA",
    color: "white",
    paddingHorizontal: 2,
    marginBottom: 100,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'white'

  },
  weather: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250,
    height: 'auto',
    backgroundColor: "#87CEFA",
    color: "white",
    paddingHorizontal: 5,
    marginBottom: 100,
    borderRadius: 5,
    borderWidth: 5,
    paddingVertical: 25,
    borderColor: 'white'
  }
})


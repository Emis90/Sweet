import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: 2,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    backgroundColor: '#DCDCDC',
    borderRadius: 5
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: '5%',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  }

})
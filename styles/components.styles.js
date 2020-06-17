import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: '1%',
    borderWidth: 1,
    borderColor: 'pink'
  },
  cardTitle: {
    paddingHorizontal: '5%',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue'
  },
  cardSubTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue'
  }

})
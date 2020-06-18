import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 2,
    borderWidth: 2,
    borderColor: 'grey',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#E6E6FA',
    borderRadius: 5
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: '5%',
    alignItems: 'center',
    alignContent: 'center',
    color: 'orange'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    paddingHorizontal: 4
  },
  image: {
    height: 180,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey'
  }

})
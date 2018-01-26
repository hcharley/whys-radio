import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  nowPlayingText: {
    paddingRight: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    alignSelf: 'flex-start',
  },
  streamTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
});

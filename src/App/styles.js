import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  logo: {
    width: 200,
    height: 200,
    margin: 30,
  },
  streamTitleContainer: {
    padding: 20,
  },
  streamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
});

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
    width: 175,
    height: 175,
    margin: 25,
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
  navigation: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

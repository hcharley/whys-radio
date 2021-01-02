import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

// import { WhysRadio } from './src/WhysRadio';

const WhysRadio = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <WhysRadio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

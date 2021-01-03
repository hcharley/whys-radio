import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { registerPlaybackService } from 'react-native-track-player';
import { WhysRadio } from './src/WhysRadio';
import { registerRootComponent } from 'expo';

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
    paddingTop: 40,
  },
});

registerRootComponent(App);

// registerPlaybackService(() => require('./service.js'));

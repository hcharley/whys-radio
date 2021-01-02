import React from 'react';
import { Text, View } from 'react-native';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export const CurrentSong = ({ streamTitle }: { streamTitle: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nowPlayingText}>NOW PLAYING</Text>
      <Text style={styles.streamTitle}>{streamTitle}</Text>
    </View>
  );
};

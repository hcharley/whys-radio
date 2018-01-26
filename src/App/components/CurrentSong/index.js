import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';


export default class CurrentSong extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nowPlayingText}>
          NOW PLAYING
        </Text>
        <Text style={styles.streamTitle}>
          {this.props.streamTitle}
        </Text>
      </View>
    );
  }
}

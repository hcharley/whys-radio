import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';


export default class Button extends React.Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={() => this.onPress()}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

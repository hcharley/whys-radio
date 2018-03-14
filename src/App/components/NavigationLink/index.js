import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';


export default class NavigationLink extends React.Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  render() {
    let containerStyle = styles.container;
    if (this.props.icon) containerStyle = styles.containerWithIcon;

    return (
      <TouchableHighlight
        style={containerStyle}
        onPress={() => this.onPress()}
        underlayColor="#ccc"
      >
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

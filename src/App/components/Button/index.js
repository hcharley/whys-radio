import React from 'react';
import { Text, Image, TouchableHighlight } from 'react-native';

import styles from './styles';


export default class Button extends React.Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  renderInner() {
    if (this.props.icon) {
      return (
        <Image source={this.props.icon} style={styles.icon} />
      );
    }
    return (
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    );
  }
  render() {
    let containerStyle = styles.container;
    if (this.props.icon) containerStyle = styles.containerWithIcon;

    return (
      <TouchableHighlight style={containerStyle} onPress={() => this.onPress()} underlayColor="#ccc">
        {this.renderInner()}
      </TouchableHighlight>
    );
  }
}

import React from 'react';
import { Text, Image, TouchableHighlight } from 'react-native';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    marginBottom: 5,
  },
  containerWithIcon: {
    marginBottom: 10,
    borderRadius: 130,
    backgroundColor: '#fff',
  },
  icon: {
    width: 70,
    height: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export class Button extends React.Component<{
  onPress: () => void;
  icon: any;
  text: string;
}> {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  renderInner() {
    if (this.props.icon) {
      return <Image source={this.props.icon} style={styles.icon} />;
    }
    return <Text style={styles.text}>{this.props.text}</Text>;
  }
  render() {
    const containerStyle = this.props.icon
      ? styles.containerWithIcon
      : styles.container;

    return (
      <TouchableHighlight
        style={containerStyle}
        onPress={() => this.onPress()}
        underlayColor="#ccc"
      >
        {this.renderInner()}
      </TouchableHighlight>
    );
  }
}

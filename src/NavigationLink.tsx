import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 2,
  },
  containerWithIcon: {
    padding: 5,
    borderRadius: 2,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export class NavigationLink extends React.Component<{
  onPress: () => void;
  icon?: any;
  text: string;
}> {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  render() {
    let containerStyle = this.props.icon
      ? styles.container
      : styles.containerWithIcon;

    return (
      <TouchableHighlight
        style={containerStyle}
        onPress={() => this.onPress()}
        underlayColor="#ccc"
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

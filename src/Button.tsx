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

export const Button = (props: {
  onPress: () => void;
  icon: any;
  text: string;
}) => {
  const renderInner = () => {
    if (props.icon) {
      return <Image source={props.icon} style={styles.icon} />;
    }
    return <Text style={styles.text}>{props.text}</Text>;
  };

  const containerStyle = props.icon
    ? styles.containerWithIcon
    : styles.container;

  return (
    <TouchableHighlight
      style={containerStyle}
      onPress={() => props.onPress()}
      underlayColor="#ccc"
    >
      {renderInner()}
    </TouchableHighlight>
  );
};

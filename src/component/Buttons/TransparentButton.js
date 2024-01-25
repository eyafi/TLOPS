import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TransparentButton = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 4,
    borderColor: '#9BBFF3',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4285F4'
  }
});
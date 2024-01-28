import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FilledButton = ({
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

export default FilledButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#4285F4'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'
  }
});
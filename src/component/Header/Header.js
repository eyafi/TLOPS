import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../assets/svg/BackIcon.js';

const Header = ({
  title,
  containerStyle,
  titleStyle,
  onpressBack,
  underlayColor
}) => {
  return (
    <View style={[Styles.container, containerStyle]}>
      <TouchableOpacity style={Styles.leftside} onPress={onpressBack}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={[Styles.header, titleStyle]}>{title}</Text>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#4285F4',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    width: '100%',
  },
  leftside: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  header: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  }

});
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

      <TouchableOpacity onPress={onpressBack}>
        <View style={Styles.leftside}>
          <BackIcon />
        </View>
      </TouchableOpacity>
      <View style={[Styles.middleside,]}>
        <Text style={[Styles.header, titleStyle]}>{title}</Text>
      </View>

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
    // flex:50,
    width: 60,
  },
  middleside: {
    justifyContent: 'center',
    flex: 250,
  },
  header: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  }

});
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import RightAngBrace from '../../assets/svg/RightAngBrace';

const PaymentNumberInput = ({
  value,
  setValue,
  onPressIcon,
  style
}) => {
  return (
    <View style={[Styles.inputContainer, style]}>
      <TextInput
        style={Styles.input}
        inputMode='numeric'
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity
        style={[Styles.rightIcon, { backgroundColor: value.length < 11 ? '#E0E0E0' : '#4285F4' }]}
        onPress={onPressIcon}>
        <RightAngBrace />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentNumberInput;

const Styles = StyleSheet.create({
  inputContainer: {
    margin: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#ECEEF0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '93%',
    fontWeight: '700',
    color: '#000'
  },

  rightIcon: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
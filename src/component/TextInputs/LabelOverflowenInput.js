import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const LabelOverflowenInput = ({
  label,
  value,
  setValue,
  input,
  style,
  inputStyle,
  showErrorMessage,
  errorMessage,
}) => {
  return (
    <View style={style}>
      <View style={[Styles.parent, { borderColor: showErrorMessage ? '#F9453F' : '#C4C4C4' }]}>
        <Text style={[Styles.label, { color: showErrorMessage ? '#F9453F' : '#C4C4C4' }]}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          inputMode={input}
          style={[{ padding: 0, color: '#000' }, inputStyle]}
        />
      </View>
      {showErrorMessage && <Text style={{ color: '#F9453F', marginLeft: 10, marginTop: 5 }}>{errorMessage}</Text>}
    </View>
  );
};

export default LabelOverflowenInput;

const Styles = StyleSheet.create({
  parent: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: "relative"
  },

  label: {
    position: 'absolute',
    top: -10,
    left: 15,
    paddingHorizontal: 5,
    backgroundColor: '#fff'
  }

});
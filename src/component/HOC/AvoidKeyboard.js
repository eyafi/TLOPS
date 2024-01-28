import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

const AvoidKeyboard = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={-45}
      style={{ flex: 1 }}
      enabled
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AvoidKeyboard;
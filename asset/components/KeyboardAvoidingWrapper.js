import React from 'react';

// keyboard avoiding view
import { KeyboardAvoidingView, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{flexGrow: 1}} >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;

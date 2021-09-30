import React from "react";
import {View,Text, StyleSheet, Button, Image} from "react-native";
import { InputField, InputWrapper } from "../styles/AddPost";
import ActionButton from 'react-native-action-button';

const AddPostScreen = () => {
return (
<View style={styles.container}>
    <InputWrapper>
    <InputField
    placeholder="What's Gonna Pass!"
    multiline
    numberofLines={4}
    />
    </InputWrapper>
    <ActionButton buttonColor="#7F3DFF" offsetY={90}>
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={() => console.log("notes tapped!")}>
          <Image
              source={require("/Programming/Student/screen/Icons/Fill5.png")}
              resizeMode="contain"
              style={{
                width: 30,
                width: 30,
                
              }}
              />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={() => {}}>
          <Image
              source={require("/Programming/Student/screen/Icons/Fill4.png")}
              resizeMode="contain"
              style={{
                width: 30,
                width: 30,
                
              }}
              />
          </ActionButton.Item>
          
        </ActionButton>
</View>
);
};

export default AddPostScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        fontSize: 20,
        height: 22,
        color: 'white',
        
    },
    
});
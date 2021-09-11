import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,  } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const FormButton1 = ({buttonTitle, ...rest}) => {
    return(
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>

      

    

    )
}

export default FormButton1;

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 50,
      width: '50%',
      height: windowHeight / 18,
      backgroundColor: '#CBC3E3',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#000000',
      fontFamily: 'Lato-Regular',
    },
  });
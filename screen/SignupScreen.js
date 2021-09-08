import React,{useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {windowHeight, windowWidth} from '../asset/utils/Dimentions';
import FormInput from '../asset/components/Forminput';
import FormButton from '../asset/components/FormButton';
import SocialButton from '../asset/components/SocialButton';


const SignupScreen=({navigation}) =>{
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[confirmpassword,setonfirmPassword]=useState();

    return(
        <View style={styles1.container}>
            <Text style={styles1.Text}>Create an Account</Text>
            
            <FormInput 
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeholderText="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            />

            <FormInput 
            labelValue={password}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeholderText="Password"
            secureTextEntry={true}
            />
            
            <FormInput 
            labelValue={confirmpassword}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeholderText="Confirm Password"
            secureTextEntry={true}
            />
             


            <FormButton
            buttonTitle="Create Account"
            onPress={() => alert("Sign In Clicked")}
            /> 

            <Text>   </Text>

            <Button
            style={styles1.Button}
            title="Have an Account"
            color="#6e3b6e"
            borderRadius="20" 
            onPress={()=> navigation.navigate("Login")}
            /> 

            {/* <TouchableOpacity
            style={styles1.forgotButton}
            onPress={()=> {}}>
              <Text style={styles1.navButtonText}>
                Forgot Password?
              </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity
            style={styles1.forgotButton}
            onPress={()=> navigation.navigate('Signup')}
            >
              <Text style={styles1.navButtonText}>
                Dont have an account? Create here.
              </Text>
            </TouchableOpacity> */}

            

        </View>
        

    );
};

export default SignupScreen;

const styles1 = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },

    Text: {
      fontFamily: 'Kufam-SemiBoldItalic' ,
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    
    navButton: {
      marginTop: 15,
    },
    
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
     Button:{
      marginTop: 10,
      width: '80%',
      height: windowHeight / 10,
      backgroundColor: '#7F3DFF',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
     }

  });
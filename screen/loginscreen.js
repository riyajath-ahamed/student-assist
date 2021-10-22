
import React,{useContext, useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import FormInput from '../asset/components/Forminput';
import FormButton from '../asset/components/FormButton';
import SocialButton from '../asset/components/SocialButton';

import { AuthContext } from '../navigation/AuthProvider';



//import { Image } from 'react-native-svg';
import { isContinueStatement } from '@babel/types';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Loginscreen=({navigation}) =>{
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[emailError,setemailError]=useState();

  const {login} = useContext(AuthContext);
  const test=email;

  function comp(){
    if (email && password == null){
      return Alert.alert('Enter your Email and Password')
    }

  }

    return(
        <View style={styles1.container}>
          <Image
            source={require('../asset/img/Logo.jpeg')}
            style={styles1.logo}
              />

            <Text style={styles1.Text}>Student Assist</Text>        
            <FormInput 
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeholderText="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            />
              
          
            
            {
              email ? null && test.includes :
              <Text style={styles1.errorMsg}>Enter A Valid Email</Text>
            }
            

            <FormInput 
            labelValue={password}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeholderText="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            />

            {
              password ? null && test.includes :
              <Text style={styles1.errorMsg}>Enter A Valid Password</Text>
            }     

          
            <FormButton
            disabled= {false}
            buttonTitle="Sign In"
            onPress={() => {comp(); login(email, password); }}
            />
             
          
        

            {/* <TouchableOpacity
            style={styles1.forgotButton}
            onPress={()=> {}}>
              <Text style={styles1.navButtonText}>
                Forgot Password?
              </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
            style={styles1.forgotButton}
            onPress={()=> navigation.navigate('Signup')}
            >
              <Text style={styles1.navButtonText}>
                Dont have an account? Create here.
              </Text>
            </TouchableOpacity>
          

            

        </View>
        

    );
};

export default Loginscreen;

const styles1 = StyleSheet.create({
    container: {
      color:'#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
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
    forgotButton: {
      marginVertical: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    errorMsg: {
      color: '#FF0000',
      fontSize: 10,
      marginRight: 200
    },
  });
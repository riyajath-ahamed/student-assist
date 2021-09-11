//import { styles } from 'ansi-colors';
import React,{useContext, useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../asset/components/Forminput';
import FormButton from '../asset/components/FormButton';
import SocialButton from '../asset/components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const Loginscreen=({navigation}) =>{
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  const {login} = useContext(AuthContext);

    return(
        <View style={styles1.container}>
            <Text style={styles1.Text}>Student Assist</Text>
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

            <FormButton
            buttonTitle="Sign In"
            onPress={() => login(email, password)}
            /> 

            <TouchableOpacity
            style={styles1.forgotButton}
            onPress={()=> {}}>
              <Text style={styles1.navButtonText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

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
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
import React, { useContext, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Pick } from 'react-native';
import FormButton from '../asset/components/FormButton';
import FormButton1 from '../asset/components/FormButton1';
import FormInput from '../asset/components/Forminput';

import { windowHeight, windowWidth } from '../asset/utils/Dimentions';
import { AuthContext } from '../navigation/AuthProvider';

import { Picker } from "@react-native-picker/picker";
import "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import KeyboardAvoidingWrapper from '../asset/components/KeyboardAvoidingWrapper';




const SignupScreen=({navigation}) =>{
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[confirmpassword,setconfirmPassword]=useState();
  const[fname,setFname]=useState();
  const[lname,setLname]=useState();

  const { register } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [account, setAccount] = useState();
  const [selectedValue, setSelectedValue] = useState();


  
  // firestore()
  //       .collection('users')
  //       .doc(user.uid)
  //       .update({
  //         accounttyp: userData.accounttyp,
  //       })
    

    return(
      <KeyboardAvoidingWrapper>
        <View style={styles1.container}>
            <Text style={styles1.Text}>Create an Account</Text>
            
            <FormInput 
            labelValue={email}
            onChangeText={(userEmail)=>setEmail(userEmail)}
            placeholderText="Email *"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            />

          <Picker 
          // itemStyle={{backgroundColor:'#fff'}}
          // placeholder="Account Type"
          labelValue={account}
          selectedValue={selectedValue}
          onValueChange={(account,itemindex) => {if(account !== 'disabled'){
            setSelectedValue(account)
            setAccount(account)
          }}}
          mode="dropdown"  
          style={styles1.picker} 
          >

          <Picker.Item label="Account Type *" value="disabled" color="#aaa" />
          {/* <Picker.Item itemindex="1" label="Staff" value="staff" /> */}
          <Picker.Item itemindex="3" label="Club" value="student" />
          <Picker.Item itemindex="2" label="Student" value="student" />
          </Picker>

        {/* <Text style={styles1.Text}>  {account}</Text> */}

        <FormInput 
            labelValue={fname}
            onChangeText={(fname)=>setFname(fname)}
            placeholderText="First Name"
            
            />
            <FormInput 
            labelValue={lname}
            onChangeText={(lname)=>setLname(lname)}
            placeholderText="Last Name"
            
            />




            <FormInput 
            labelValue={password}
            onChangeText={(userPassword)=>setPassword(userPassword)}
            placeholderText="Password *"
            secureTextEntry={true}
            />
            


            <FormInput 
            labelValue={confirmpassword}
            onChangeText={(userPassword)=>setconfirmPassword(userPassword)}
            placeholderText="Confirm Password *"
            secureTextEntry={true}
            /> 
            
            {
              register ? password !== confirmpassword :
                    alert("Passwords don't match.")
            }
            

          
     


            <FormButton
            buttonTitle="Sign Up"
            onPress={() => register(email, password, account, fname, lname)}
            /> 

            <Text style={styles1.Text1}>* - Require to fill  </Text>

            <FormButton1
            buttonTitle="Have an Account" 
            onPress={()=> navigation.navigate("Login")}
            /> 

            

        </View>
        </KeyboardAvoidingWrapper>

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

    Text1: {
      fontFamily: 'Kufam-SemiBoldItalic' ,
      fontSize: 15,
      marginBottom: 10,
      color: 'red',
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
     },
     picker: {
      marginVertical: 10,
      width: 300,
      padding: 5,
      borderWidth: 20,
      borderColor: "#fff",
    },

  });
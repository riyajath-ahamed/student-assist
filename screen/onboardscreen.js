 //import { styles } from 'ansi-colors';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:20}}
        {...props}
    >
        <Text style={styles1.Text}>DONE</Text>
    </TouchableOpacity>
);

 const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        DoneButtonComponent={Done}
        onSkip={()=> navigation.replace("Login")}
        onDone={()=> navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#7F3DFF',
            image: <Image source={require('../asset/img/3.png')}  
            style={{
              height: 100,
              width: 100,
              
            }}/>,
            title: 'Student Assist',
            subtitle: 'Your Tasking Partner',
          },
          {
              backgroundColor: '#fff',
              image: <Image source={require('../asset/img/Illustration.png')} />,
              title: 'Daily Planner',
              subtitle: '.....',
            },

            {
                backgroundColor: '#7F3DFF',
                image: <Image source={require('../asset/img/Description.png')} />,
                title: 'Daily Planner',
                subtitle: '',
              },
        
        ]}
      />
      
    );
 };

 export default OnboardingScreen;

 const styles1 = StyleSheet.create({
     container:{
         flex: 1,
         alignItems:'center',
         justifyContent: 'center',
     },
     Text:{
       color:'#fff',
        fontSize:18,
     }
 });
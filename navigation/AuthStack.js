import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screen/onboardscreen';
import Loginscreen from '../screen/loginscreen';
import SignupScreen from '../screen/SignupScreen';

const Stack= createStackNavigator();

const AuthStack = () => {
    return(
    
      <Stack.Navigator>
      
        <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}
        option={{header:() => null}}
        />
        <Stack.Screen 
        name="Login" 
        component={Loginscreen}
        option={{header:() => null}}
        />
        <Stack.Screen name="Signup"  
        component={SignupScreen}/>
      </Stack.Navigator>
    

  );
}

export default AuthStack;
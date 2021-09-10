import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../screen/onboardscreen';
import Loginscreen from '../screen/loginscreen';
import SignupScreen from '../screen/SignupScreen';

const Stack= createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); 
  }, []);

    if (isFirstLaunch === null) {
      return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
      routeName = 'Onboarding';
    } else {
      routeName = 'Login';
    }

    return(
    
      <Stack.Navigator initialRouteName={routeName} >
      
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
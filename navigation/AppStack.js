import React, {useContext, useEffect, useState}from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import ChatScreen from "../screen/ChatScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import AddPostScreen from "../screen/AddPostScreen";
import TimeTableSt from "../screen/TimeTableSt";
import EditProfileScreen from "../screen/EditProfileScreen";
import firestore from '@react-native-firebase/firestore'

import Reminder from "../screen/Reminder";
import { AuthContext } from "../navigation/AuthProvider";
import ReminderS from "../screen/ReminderS";
import settings from "../screen/settings";



const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

const CustomTabBarButton =({children, onPress}) => (
  <TouchableOpacity
    style={{
      top:-10,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View
    style={{
      width:60,
      height:60,
      borderRadius: 40 ,
      backgroundColor:'#D6C8F1'
    }}
    > 
      {children}
    </View>
  </TouchableOpacity>
);

const FeedStack =({navigation}) =>(
    <Stack.Navigator >
    <Stack.Screen
      name="Student Assist "
      component={HomeScreen}
      headerMode="false"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#7F3DFF',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 20,
          fontWeight: 'bold'
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <MaterialCommunityIcons.Button
              iconStyle="album"
              size={20}
              backgroundColor="#7F3DFF"
              color="#7F3DFF"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: 'Post',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 5}}>
            <Image
              source={require('../screen/Icons/arrowleft.png')}
              
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
              />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 5}}>
            <Image
              source={require('../screen/Icons/arrowleft.png')}
              
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
              }}
              />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile1"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        tabBarVisible:'false',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="settings"
      component={settings}
      options={{
        headerTitle: 'Settings',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        tabBarVisible:'false',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

// const getaccounttype = async() => {
//   await firestore()
//       .collection('users')
//       .doc(user.accounttyp)
//       .get()
//           if(setUserData == 'student'){
//             return account= Reminder;

//           }else{
//             return account= ReminderS;
//           }
//         }

        
const AppStack=() => {
  const {user, logout} = useContext(AuthContext);
  const [userData,setUserData]= useState();
  const [account,setAccount]= useState();
  const [accounttyp,setAccounttyp]= useState();

  var accounts = Reminder;

  const getUser = async() => {
    const currentUser = await firestore()
    .collection('users')
    .doc(user.uid)
    .get(accounttyp)
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setAccounttyp(documentSnapshot.data());
      }
    })
    .catch(error => console.log(error))
  }

  if(setAccounttyp == 'student'){
    accounts = Reminder
  }else{
    accounts = ReminderS
  }
  
  useEffect(() => {
    getUser();
  }, []);
        
  

  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'EditProfile') {
      return false;
    }
    return true;
  };

    return(
        <tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#7F3DFF',
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 10,
              right :10,
              borderRadius: 10,
              height: 50,
              ...styles.shadow  
            }
            
        }}>
        
        <tab.Screen
        name="Home"
        component={FeedStack}
        option={{
          
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:"center", justifyContent: "center", top:5}}>
              <Image
              source={require('../screen/Icons/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:focused ? '#7F3DFF': '#748c94'
              }}
              />
            </View>
        )
        }}
        /> 

        <tab.Screen
            name='Time-Table'
            component={TimeTableSt}
            options={{
              
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent: "center", top: 5}}>
                      <Image
                      source={require('../screen/Icons/transactiontimetable.png')}
                      
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor:focused ? '#7F3DFF': '#748c94'
                      }}
                      />
                    </View>
                )
                

            }}

        />

        <tab.Screen name=" " component={AddPostScreen}
          options={{
            tabBarIcon: ({focused}) =>(
              <Image
              source={require("/Programming/Student/screen/Icons/Add.png")}
              resizeMode="contain"
              style={{
                width: 60,
                width: 60,
                
              }}
              />
            ),
            tabBarButton:(props) =>(
              <CustomTabBarButton { ...props}/>
            )
          }}
        
        />
        <tab.Screen
            name='Reminder'
            component={ReminderS}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent: "center", top:5}}>
                      <Image
                      source={require('../screen/Icons/pie-chart.png')}
                      
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor:focused ? '#7F3DFF': '#748c94'
                      }}
                      />
                    </View>
                )
            }}

        />

        <tab.Screen
        name='Profile'
        component={ProfileStack}
        options={({route}) => ({
          tabBarVisible: 'false',
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:"center", justifyContent: "center", top:5}}>
              <Image
              source={require('../screen/Icons/user.png')}
              
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:focused ? '#7F3DFF': '#748c94'
              }}
              />
            </View>
        )
        })}
        />
        </tab.Navigator>
    )
}

const styles=StyleSheet.create({
  shadow: {
    shadowColor: '#7f5DF0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity:0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})  

export default AppStack;
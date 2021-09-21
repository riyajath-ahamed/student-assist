import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ChatScreen from "../screen/ChatScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import AddPostScreen from "../screen/AddPostScreen";

import Reminder from "../screen/Reminder";

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
      borderRadius: 35,
      backgroundColor:'#7F3DFF'
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
              size={22}
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
          <View style={{marginLeft: 15}}>
            <Image
              source={require('../screen/Icons/Vector.png')}
              
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor:focused ? '#7F3DFF': '#748c94'
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
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#7F3DFF" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const AppStack=() => {
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
              height: 70,
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
                width: 40,
                height: 40,
                tintColor:focused ? '#7F3DFF': '#748c94'
              }}
              />
            </View>
        )
        }}
        /> 

        <tab.Screen
            name='Time-Table'
            component={ChatScreen}
            options={{
              
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent: "center", top: 5}}>
                      <Image
                      source={require('../screen/Icons/transactiontimetable.png')}
                      
                      resizeMode="contain"
                      style={{
                        width: 40,
                        height: 40,
                        tintColor:focused ? '#7F3DFF': '#748c94'
                      }}
                      />
                    </View>
                )
                //<ion-icon name="calendar-outline"></ion-icon>

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
            component={Reminder}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:"center", justifyContent: "center", top:5}}>
                      <Image
                      source={require('../screen/Icons/pie-chart.png')}
                      
                      resizeMode="contain"
                      style={{
                        width: 40,
                        height: 40,
                        tintColor:focused ? '#7F3DFF': '#748c94'
                      }}
                      />
                    </View>
                )
            }}

        />

        <tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:"center", justifyContent: "center", top:5}}>
              <Image
              source={require('../screen/Icons/user.png')}
              
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor:focused ? '#7F3DFF': '#748c94'
              }}
              />
            </View>
        )
        }}
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
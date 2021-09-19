import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ChatScreen from "../screen/ChatScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import AddPostScreen from "../screen/AddPostScreen";

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

const FeedStack =({navigation}) =>(
    <Stack.Navigator >
    <Stack.Screen
      name="Student Assist"
      component={HomeScreen}
      headerMode="false"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#7F3DFF',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
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
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
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
            activeTintColour: '#7F3DFF',
            headerShown: false,
            
        }}>
        
        <tab.Screen
        name="Home"
        component={FeedStack}
        option={{
            tabBarLable: 'Home',
            tabBarBadge: 3,
            tabBarIcon:({color, size}) =>(
                <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
                />
            )
            
        }}
        />
        <tab.Screen
            name='Time-Table'
            component={ChatScreen}
            options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="calendar-outline" color={color} size={size} />
                )
                //<ion-icon name="calendar-outline"></ion-icon>

            }}

        />
        {/* <tab.Screen
            name='Time-Table'
            component={ChatScreen}
            options={{
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="alarm-outline" color={color} size={size} />
                )
                //<ion-icon name="alarm-outline"></ion-icon>

            }}

        /> */}

        <tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
            tabBarIcon: ({color,size}) => (
                <Ionicons name="person-outline" color={color} size={size} />
            )

        }}
        />
        </tab.Navigator>
    )
}

export default AppStack;
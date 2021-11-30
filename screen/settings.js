import React, {useState, useContext} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView, Image } from "react-native";
import { set } from "react-native-reanimated";
import Carousel from "react-native-snap-carousel";



import { AuthContext } from "../../navigation/AuthProvider";
import { Card, UserInfo, UserInfoText, UserName } from "../styles/settingss";
import aboutCampus from "./aboutCampus";
import { sliderData } from "./modal/data";






const settings = ({navigation, route}) => {


return (
    <View>
        
         <Card>

            <TouchableOpacity 
            onPress={() => { navigation.navigate('About Campus');}} >
            <UserInfo>

            <Image source={require('../asset/Icon/campus.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 50,
                                height: 50,
                                marginLeft: 20,
                                marginTop: 0
                            }}
                            />
                            <UserInfoText>
                                <UserName> About Campus</UserName>

                            </UserInfoText> 
                            </UserInfo>
            </TouchableOpacity>
        </Card>

        <Card>
            <TouchableOpacity
            onPress={() => { navigation.navigate('Report a Problem');}}
            >
            <UserInfo>

            <Image source={require('../asset/Icon/problem.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 50,
                                height: 50,
                                marginLeft: 20,
                                marginTop: 0
                            }}
                            />
                            <UserInfoText>
                                <UserName> Report a Problem</UserName>

                            </UserInfoText> 
                            </UserInfo>
            </TouchableOpacity>
        </Card>
        <Card>
            <TouchableOpacity
            onPress={() => { navigation.navigate('About us');}}
            >
            <UserInfo>

            <Image source={require('../asset/Icon/adtus.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 50,
                                height: 50,
                                marginLeft: 20,
                                marginTop: 0
                            }}
                            />
                            <UserInfoText>
                                <UserName> About Us</UserName>

                            </UserInfoText> 
                            </UserInfo>
            </TouchableOpacity>
        </Card>
        

        
    </View>
 
    
);
};

export default settings;

const styles1 = StyleSheet.create({
 


})


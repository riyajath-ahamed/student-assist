import React, {useState, useContext} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView, Image } from "react-native";



import { AuthContext } from "../../navigation/AuthProvider";
import { Card, UserInfo, UserInfoText, UserName } from "../styles/settingss";






const settings = () => {


return (
    <View>
        {/* <Card>
         <UserInfo>    
        <TouchableOpacity onPress={() => { navigation.navigate(TimeTablecomp);}}>
          <Image source={require('../asset/Icon/calendar.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 30,
                                height: 30,
                                marginLeft: 10,
                                marginTop: 0,
                            }}
                            />
                            <UserInfoText>
                                <UserName> </UserName>

                            </UserInfoText> 
          </TouchableOpacity>
          </UserInfo>
         </Card> */}
         <Card>

            <TouchableOpacity>
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
            <TouchableOpacity>
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
            <TouchableOpacity>
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


import React from "react";
import {View,Text, StyleSheet, Image, ScrollView} from "react-native";
import { Card, Container, DayText, UserInfo, UserName,TableTime, UserInfoText, PostText } from "../styles/reminder";

const Reminder = () => {
return (
    <ScrollView>
    <Container>
        <DayText>Reminder</DayText>
        <Card 
        style={styles1.cardleft}
        >
            <UserInfo>
                <UserName
                
                >
                    Publication
                </UserName>
                
            </UserInfo>
            <Image source={require('../asset/Icon/pubb.png')}
            resizeMode="contain"
            
            style={{
                width: 80,
                height: 80,
                marginLeft: 50
              }}
              />

            <Image source={require('../asset/Icon/close.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 50

                            }}
                            />
        </Card>
        <Card 
        style={styles1.card2}
        >
            <UserInfo>
                <UserName>
                    Canteen
                </UserName>
                
            </UserInfo>
            <Image source={require('../asset/Icon/cant.png')}
            resizeMode="contain"
            
            style={{
                width: 80,
                height: 80,
                marginLeft: 50
              }}
              />

            <Image source={require('../asset/Icon/open.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 50,

                            }}
                            />
        </Card>
        <Card 
        style={styles1.card3}
        >
            <UserInfo>
                <UserName>
                    Gym
                </UserName>
                
            </UserInfo>
            <Image source={require('../asset/Icon/gym.png')}
            resizeMode="contain"
            
            style={{
                width: 80,
                height: 80,
                marginLeft: 50
              }}
              />

            <Image source={require('../asset/Icon/open.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 50
                            }}
                            />
        </Card>
        <Card 
        style={styles1.card4}
        >
            <UserInfo>
                <UserName>
                    MI Room
                </UserName>
                
            </UserInfo>
            <Image source={require('../asset/Icon/med.png')}
            resizeMode="contain"
            
            style={{
                width: 80,
                height: 80,
                marginLeft: 50
              }}
              />

            <Image source={require('../asset/Icon/close.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 50
                            }}
                            />
        </Card>
        <Card>
        <UserInfo>
            <UserInfoText>
            <UserName>Rotaract Meeting</UserName>
            <PostText>27th August</PostText>
                <TableTime>6.00PM - 8.00 PM</TableTime>

            </UserInfoText>
        </UserInfo>

</Card>

    </Container>
    </ScrollView>

);
};

export default Reminder;

const styles1 = StyleSheet.create({
    cardleft:{
        marginRight: 210,
    },
    card2:{
        marginLeft: 210,
        marginTop: -227,
    },
    card3:{
        marginRight: 210,
    },
    card4:{
        marginLeft: 210,
        marginTop: -227,
    },

})
import React, {useState} from "react";
import {View,Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Pressable, Switch } from "react-native";
import * as AddCalendarEvent from 'react-native-add-calendar-event';

import { Card, Container, DayText, UserInfo, UserName,TableTime, UserInfoText, PostText, Card1 } from "../styles/reminder";
import FormInput from "../asset/components/Forminput";
import { Root, Popup } from 'popup-ui';

const ReminderS = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState(null);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    
return (
    <ScrollView>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles1.centeredView}>
          <View style={styles1.modalView}>
            <DayText>Publication</DayText>
            <Switch
                trackColor={{ false: "#767577", true: "#7F3DFF" }}
                thumbColor={isEnabled ? "#4CD964" : "#FF3939"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <Pressable
              style={[styles1.button, styles1.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles1.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles1.button, styles1.buttonSave]}
              onPress={() => {setModalVisible(!modalVisible); updatetime()}}
            >
              <Text style={styles1.textStyle}> Save </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    <Container>
        <DayText>Reminder</DayText>
        
        <Card 
        style={styles1.cardleft}
        >
            <TouchableOpacity
             onPress={() => {setModalVisible(true); } }
        
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
         </TouchableOpacity>  
        </Card>
        

        
        <Card 
        style={styles1.card2}
        >
            <TouchableOpacity>
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
                            </TouchableOpacity>
        </Card>
        
        
        <Card 
        style={styles1.card3}
        >
            <TouchableOpacity>
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
            </TouchableOpacity>
        </Card>
        
        <Card 
        style={styles1.card4}
        >
            <TouchableOpacity>
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
            </TouchableOpacity>
        </Card>
        <Card1>
        <UserInfo>
            <UserInfoText>
            <UserName>Rotaract Meeting</UserName>
            <PostText>27th August</PostText>
                <TableTime>6.00PM - 8.00 PM</TableTime>
                <TouchableOpacity
                
                >
                <Image source={require('../asset/Icon/adddd.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 100,
                                height: 100,
                                marginLeft: 270,
                                marginTop: -90
                            }}
                            />
                </TouchableOpacity>


            </UserInfoText>
        </UserInfo>

</Card1>

<Card1>
        <UserInfo>
            <UserInfoText>
            <UserName>Rotaract Meeting</UserName>
            <PostText>27th August</PostText>
                <TableTime>6.00PM - 8.00 PM</TableTime>
                <TouchableOpacity>
                <Image source={require('../asset/Icon/adddd.png')}
                            resizeMode="contain"
                            
                            style={{
                                width: 100,
                                height: 100,
                                marginLeft: 270,
                                marginTop: -90
                            }}
                            />
                </TouchableOpacity>

            </UserInfoText>
        </UserInfo>

</Card1>

    </Container>
    </ScrollView>

);
};

export default ReminderS;

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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        marginRight: 170,
        marginBottom:-40,
        backgroundColor: "#2196F3",
      },
      buttonSave: {
        marginRight: -200,
        backgroundColor: "#bce954",
      },
      textStyle: {
        fontSize:15,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#333333',
      },
      action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },

})
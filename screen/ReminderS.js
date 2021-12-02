import React, {useState, useEffect} from "react";
import {View,Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Pressable, Switch, Alert } from "react-native";
import * as AddCalendarEvent from 'react-native-add-calendar-event';

import { Card, Container, DayText, UserInfo, UserName,TableTime, UserInfoText, PostText, Card1 } from "../styles/reminder";
import FormInput from "../asset/components/Forminput";
import { Root, Popup } from 'popup-ui';
import firestore from '@react-native-firebase/firestore';
import ToggleSwitch from 'toggle-switch-react-native'

const ReminderS = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState(null);
    const [place,setPlace] = useState("");
    const [stat, setStat]= useState();
    const [open11,setOpen11] = useState();


    const [publication,setPublication] = useState();
    const [canteen,setCanteen] = useState();
    const [gym,setGym] = useState();
    const [miroom,setMiroom] = useState();

    useEffect(() => {
      getUser();
      slide();
      pub();
      cant();
      gymm();
      mirm();
    }, []);


    const updatetime = async() => {
      firestore()
      .collection('reminder')
      .doc(place)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          return doc.ref.update({ open1: !doc.data().open1});
        } else {
          // Throw an error
        }
      })
      .then((documentSnapshot) => {
        
        console.log('Status Updated!');
        console.log('User Data ',);
        console.log();
        Alert.alert(
          'Status Updated!'
        );
        setModalVisible(!modalVisible);
        
      })
      .catch(error => console.log(error))
    }


    const getUser = async() => {

      // const currentUser0 = firestore()
      //   .collection('reminder')
      //   .doc('publication')
      //   .get()
      //   .then((documentSnapshot) => {
      //       if( documentSnapshot.exists ) {
      //       console.log('User Data 00', documentSnapshot.data().open1);
      //       // console.log('User Data', documentSnapshot.data().sub2);
      //       setPublication(documentSnapshot.data().open1);
            
    
      //       }
      //    })
      // .catch(error => console.log(error));
      
      // const currentUser1 = firestore()
      //   .collection('reminder')
      //   .doc('canteen')
      //   .get()
      //   .then((documentSnapshot) => {
      //       if( documentSnapshot.exists ) {
      //       console.log('User Data 00', documentSnapshot.data().open1);
      //       // console.log('User Data', documentSnapshot.data().sub2);
      //       setCanteen(documentSnapshot.data().open1);
            
    
      //       }
      //    })
      // .catch(error => console.log(error));
      

      // const currentUser2 = firestore()
      //   .collection('reminder')
      //   .doc('gym')
      //   .get()
      //   .then((documentSnapshot) => {
      //       if( documentSnapshot.exists ) {
      //       console.log('User Data 00', documentSnapshot.data().open1);
      //       // console.log('User Data', documentSnapshot.data().sub2);
      //       setCanteen(documentSnapshot.data().open1);
            
    
      //       }
      //    })
      // .catch(error => console.log(error));
      

      // const currentUser3 = firestore()
      //   .collection('reminder')
      //   .doc('miroom')
      //   .get()
      //   .then((documentSnapshot) => {
      //       if( documentSnapshot.exists ) {
      //       console.log('User Data 00', documentSnapshot.data().open1);
      //       // console.log('User Data', documentSnapshot.data().sub2);
      //       setCanteen(documentSnapshot.data().open1);
            
    
      //       }
      //    })
      // .catch(error => console.log(error));
    }
    // useEffect(() => {
    //   getUser();
    // }, []);
    function slide(){
      
      const currentUser5 = firestore()
      .collection('reminder')
      .doc(place)
      .get()
      .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
          console.log('User Data 00', documentSnapshot.data().open1);
          // console.log('User Data', documentSnapshot.data().sub2);
          setOpen11(documentSnapshot.data().open1);
          }
       })


    }


    function pub(){
      const currentUser0 = firestore()
        .collection('reminder')
        .doc('publication')
        .get()
        .then((documentSnapshot) => {
            if( documentSnapshot.exists ) {
            console.log('User Data 00', documentSnapshot.data().open1);
            // console.log('User Data', documentSnapshot.data().sub2);
            setPublication(documentSnapshot.data().open1);
            
            
    
            }
         })
      .catch(error => console.log(error));
      if(publication === true){
          return require('../asset/Icon/open.png')
      }else if (publication === false){
          return require('../asset/Icon/close.png')
        }
    };

    function cant(){
      const currentUser1 = firestore()
      .collection('reminder')
      .doc('canteen')
      .get()
      .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
          console.log('User Data 00', documentSnapshot.data().open1);
          // console.log('User Data', documentSnapshot.data().sub2);
          setCanteen(documentSnapshot.data().open1);
          
  
          }
       })
    .catch(error => console.log(error));

      if(canteen === true){
          return require('../asset/Icon/open.png')
      }else if (canteen === false){
          return require('../asset/Icon/close.png')
        }
    };

    
    function gymm(){
      const currentUser2 = firestore()
        .collection('reminder')
        .doc('gym')
        .get()
        .then((documentSnapshot) => {
            if( documentSnapshot.exists ) {
            console.log('User Data 00', documentSnapshot.data().open1);
            // console.log('User Data', documentSnapshot.data().sub2);
            setGym(documentSnapshot.data().open1);
            
    
            }
         })
      .catch(error => console.log(error));

      if(gym === true){
          return require('../asset/Icon/open.png')
      }else if (gym === false){
          return require('../asset/Icon/close.png')
        }
    };

    function mirm(){
      const currentUser3 = firestore()
        .collection('reminder')
        .doc('miroom')
        .get()
        .then((documentSnapshot) => {
            if( documentSnapshot.exists ) {
            console.log('User Data 00', documentSnapshot.data().open1);
            // console.log('User Data', documentSnapshot.data().sub2);
            setMiroom(documentSnapshot.data().open1);
            
    
            }
         })
      .catch(error => console.log(error));
      if(miroom === true){
          return require('../asset/Icon/open.png')
      }else if (miroom === false){
          return require('../asset/Icon/close.png')
        }
    };

    
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
            <DayText>{place}</DayText>
            {/* <Switch
                trackColor={{ false: "#767577", true: "#7F3DFF" }}
                thumbColor={isEnabled ? "#4CD964" : "#FF3939"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            /> */}
            <ToggleSwitch
              isOn={open11}
              onColor="#4CD964"
              offColor="#FF3939"
              label="Set The Status"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={() => {updatetime(); getUser()}}
            />


            <Pressable
              style={[styles1.button, styles1.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles1.textStyle}>Back</Text>
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
             onPress={() => {setModalVisible(true); setPlace('publication'); pub() ; slide();} }
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

            <Image source={pub()}
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
            <TouchableOpacity
            onPress={() => {setModalVisible(true); setPlace('canteen'); cant(); slide();} }
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

            <Image source={cant()}
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
            <TouchableOpacity
            onPress={() => {setModalVisible(true); setPlace('gym'); gymm(); slide();} }
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

            <Image source={gymm()}
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
            <TouchableOpacity
            onPress={() => {setModalVisible(true); setPlace('miroom'); mirm(); slide();} }
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

            <Image source={mirm()}
                            resizeMode="contain"
                            
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 50
                            }}
                            />
            </TouchableOpacity>
        </Card>
       

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
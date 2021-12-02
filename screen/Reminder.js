import React, {useState,useEffect}from "react";
import {View,Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import { Card, Container, DayText, UserInfo, UserName,TableTime, UserInfoText, PostText, Card1 } from "../styles/reminder";
import firestore from '@react-native-firebase/firestore';




const Reminder = () => {

    const [publication,setPublication] = useState();
    const [canteen,setCanteen] = useState();
    const [gym,setGym] = useState();
    const [miroom,setMiroom] = useState();


    useEffect(() => {
        getUser();
      }, []);

    const getUser = async() => {
        const currentUser = firestore()
        .collection('reminder')
        // .doc(publication)
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
        
            querySnapshot.forEach(documentSnapshot => {
              console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

            });
          })
        .catch(error => console.log(error));

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
      }

    //   useEffect(() => {
    //     getUser();
    //   }, []);


      function pub(){
        if(publication === true){
            return require('../asset/Icon/open.png')
        }else if (publication === false){
            return require('../asset/Icon/close.png')
          }
      };

      function cant(){
        if(canteen === true){
            return require('../asset/Icon/open.png')
        }else if (canteen === false){
            return require('../asset/Icon/close.png')
          }
      };

      
      function gymm(){
        if(gym === true){
            return require('../asset/Icon/open.png')
        }else if (gym === false){
            return require('../asset/Icon/close.png')
          }
      };

      function mirm(){
        if(miroom === true){
            return require('../asset/Icon/open.png')
        }else if (miroom === false){
            return require('../asset/Icon/close.png')
          }
      };
      

      


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

            <Image source={pub()}
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

            <Image source={cant()}
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
                Gymnasium
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

            <Image source={mirm()}
                            resizeMode="contain"
                            
                            style={{
                                width: 80,
                                height: 80,
                                marginLeft: 50
                            }}
                            />
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
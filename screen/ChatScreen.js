import React, {useState, useContext, useEffect} from "react";
import {View,Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {ProgressBar} from '@react-native-community/progress-bar-android';

import {Picker} from '@react-native-picker/picker';
import { AuthContext } from "../../navigation/AuthProvider";
import { Card, Container, DayText, PostText, TableTime, UserInfo, UserInfoText, UserName } from "../styles/TimeTableCon";

import moment from "moment";
import firestore from '@react-native-firebase/firestore';


const ChatScreen = () => {
  const [userData, setUserData] = useState(null);
  const [sub1,setSub1] = useState();
  const [sub1lec,setSub1lec] = useState();
  const [sub1clz,setSub1clz] = useState();

  const [sub2,setSub2] = useState();
  const [sub2lec,setSub2lec] = useState();
  const [sub2clz,setSub2clz] = useState();

  const getUser = async() => {
    const currentUser = await firestore()
    .collection('timetable')
    .doc(moment().format('dddd'))
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        // console.log('User Data', documentSnapshot.data().sub1);
        // console.log('User Data', documentSnapshot.data().sub2);
        setSub1(documentSnapshot.data().sub1);
        setSub1lec(documentSnapshot.data().sub1lec);
        setSub1clz(documentSnapshot.data().sub1clz);
        setSub2(documentSnapshot.data().sub2);
        setSub2lec(documentSnapshot.data().sub2lec);
        setSub2clz(documentSnapshot.data().sub2clz);
      }
    })
  }
  useEffect(() => {
    getUser();
  }, []);
return (
<Container>
<View>
  
  <DayText>Happy {moment().format('dddd')}</DayText>

<Card>
  <UserInfo>
    <UserInfoText>
    <UserName>{sub1}</UserName>
    <PostText>Lect. {sub1lec}</PostText>
    {/* <ProgressBar
    style={styles1.ProgressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
          color="#4CD964"
        
        /> */}
      <Text style={styles1.Text}>{sub1clz}</Text>
        <TableTime>8.15 AM - 11.15 AM</TableTime>

    </UserInfoText>
  </UserInfo>

</Card>
<Card>
  <UserInfo>
    <UserInfoText>
    <UserName>Interval</UserName>
    {/* <ProgressBar
    style={styles1.ProgressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0}
          color="#4CD964"
        
        /> */}
    </UserInfoText>
  </UserInfo>

</Card>
<Card>
  <UserInfo>
    <UserInfoText>
    <UserName>{sub2}</UserName>
    <PostText>Lect. {sub2lec}</PostText>
    {/* <ProgressBar
    style={styles1.ProgressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
          color="#4CD964"
        
        /> */}
        <Text style={styles1.Text}>{sub2clz}</Text>
        <TableTime>11.30 AM - 1.15 PM</TableTime>

    </UserInfoText>
  </UserInfo>

</Card>
<Card>
<TouchableOpacity

>
  {/* <Text>Complete Time-Table </Text> */}
<Image
                      source={require('../screen/Icons/transactiontimetable.png')}
                      
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        
                        
                      }}
                      />
</TouchableOpacity>
</Card>
</View>
</Container>



);
};

export default ChatScreen;

const styles1 = StyleSheet.create({
  ProgressBar: {
    width: 300,
  },

  Text: {
    fontFamily: 'Kufam-SemiBoldItalic' ,
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },




})


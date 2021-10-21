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
  const [sub2,setSub2] = useState();

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
        setSub2(documentSnapshot.data().sub2);
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
    <PostText>Lect. Amal Perera</PostText>
    <ProgressBar
    style={styles1.ProgressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
          color="#4CD964"
        
        />
        <TableTime>8.15 AM - 11.15 AM</TableTime>

    </UserInfoText>
  </UserInfo>

</Card>
<Card>
  <UserInfo>
    <UserInfoText>
    <UserName>Interval</UserName>
    <ProgressBar
    style={styles1.ProgressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0}
          color="#4CD964"
        
        />
    </UserInfoText>
  </UserInfo>

</Card>
<Card>
  <UserInfo>
    <UserInfoText>
    <UserName>{sub2}</UserName>
    <PostText>Lect. Ama Shakya</PostText>
    <ProgressBar
    style={styles1.ProgressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
          color="#4CD964"
        
        />
        <TableTime>8.15 AM - 11.15 AM</TableTime>

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
  }


})


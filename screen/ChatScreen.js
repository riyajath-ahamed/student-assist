import React, {useState, useContext, useEffect} from "react";
import {View,Text, StyleSheet, TouchableOpacity, Image, Modal, Pressable, ScrollView} from "react-native";
import {ProgressBar} from '@react-native-community/progress-bar-android';

import {Picker} from '@react-native-picker/picker';
import { AuthContext } from "../../navigation/AuthProvider";
import { Card, Card1, Container, DayText, PostText, TableTime, UserInfo, UserInfoText, UserName } from "../styles/TimeTableCon";

import moment from "moment";
import firestore from '@react-native-firebase/firestore';
import KeyboardAvoidingWrapper from '../asset/components/KeyboardAvoidingWrapper';
import TimeTablecomp from "./TimeTablecomp";
import { Divider } from "../styles/FeedStyles";
import { DayText1 } from "../styles/reminder";
import { quote } from "./modal/data";



const ChatScreen = () => { 
  const [userData, setUserData] = useState(null);
  const [sub1,setSub1] = useState();
  const [sub1lec,setSub1lec] = useState();
  const [sub1clz,setSub1clz] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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
  };
  var randomq = quote[Math.floor(Math.random()*quote.length)]; 

  useEffect(() => {
    getUser();
  }, []);

  

return (
  <ScrollView>
<Container>
<View>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Window has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <KeyboardAvoidingWrapper>
        <View style={styles1.centeredView}>
          <View style={styles1.modalView}>
            
            
            <Text>Subject 1</Text>
            
          <Text>Subject 2</Text>
          

            <Pressable
              style={[styles1.button, styles1.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles1.textStyle}>Cancel</Text>
            </Pressable>
           
          </View>
        </View>
        </KeyboardAvoidingWrapper>
      </Modal>
      </View>
<View>
  
  <DayText>Happy {moment().format('dddd')}</DayText>
  <Text style={styles1.Text2} >" {randomq} "</Text>

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
<Divider/>
<DayText1> Complete Time-Table</DayText1>
          <Card1 
          // style={styles1.cardleft}
          >
          <UserInfo>
            <UserInfoText>
            <UserName>
              Monday
            </UserName>
            <Text></Text>
            <PostText> Programming</PostText>
            <PostText> OS</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>
          <Card1 style={styles1.card2}>
          <UserInfo>
            <UserInfoText>
            <UserName>
              Monday
            </UserName>
            <Text></Text>
            <PostText> Programming</PostText>
            <PostText> OS</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>

          <Card1 
          // style={styles1.card3}
          >
          <UserInfo>
            <UserInfoText>
            <UserName>
              Monday
            </UserName>
            <Text></Text>
            <PostText> Programming</PostText>
            <PostText> OS</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>

          <Card1 style={styles1.card4}>
          <UserInfo>
            <UserInfoText>
            <UserName>
              Monday
            </UserName>
            <Text></Text>
            <PostText> Programming</PostText>
            <PostText> OS</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>
          <Card1 
          // style={styles1.card3}
          >
          <UserInfo>
            <UserInfoText>
            <UserName>
              Monday
            </UserName>
            <Text></Text>
            <PostText> Programming</PostText>
            <PostText> OS</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          
</View>
<View>

</View>

</Container>
</ScrollView>



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
  Text2: {
    fontFamily: 'Alegreya-Italic' ,
    fontSize: 20,
    fontStyle: 'italic',
    //
    marginBottom: 10,
    color: '#626',
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
  cardleft:{
    marginRight: 210,
  },
  card2:{
      marginLeft: 180,
      marginTop: -175,
  },
  card3:{
      marginRight: 210,
  },
  card4:{
      marginLeft: 180,
      marginTop: -175,
  },




})


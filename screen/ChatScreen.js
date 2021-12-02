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


  const[tue1,setTue1] = useState();
  const[tue2,setTue2] = useState();

  const[wed1,setWed1] = useState();
  const[wed2,setWed2] = useState();

  const[thu1,setThu1] = useState();
  const[thu2,setThu2] = useState();

  const[fri1,setFri1] = useState();
  const[fri2,setFri2] = useState();

  const[sat1,setSat1] = useState();
  const[sat2,setSat2] = useState();

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

    const currentUser1 = await firestore()
    .collection('timetable')
    .doc('Tuesday')
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        // console.log('User Data', documentSnapshot.data().sub1);
        // console.log('User Data', documentSnapshot.data().sub2);
        setTue1(documentSnapshot.data().sub1);
        setTue2(documentSnapshot.data().sub2);
        
      }
    })

    const currentUser2 = await firestore()
    .collection('timetable')
    .doc('Wednesday')
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        // console.log('User Data', documentSnapshot.data().sub1);
        // console.log('User Data', documentSnapshot.data().sub2);
        setWed1(documentSnapshot.data().sub1);
        setWed2(documentSnapshot.data().sub2);
        
      }
    })

    const currentUser3 = await firestore()
    .collection('timetable')
    .doc('Thursday')
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {``
        // console.log('User Data', documentSnapshot.data().sub1);
        // console.log('User Data', documentSnapshot.data().sub2);
        setThu1(documentSnapshot.data().sub1);
        setThu2(documentSnapshot.data().sub2);
        
      }
    })

    const currentUser4 = await firestore()
    .collection('timetable')
    .doc('Friday')
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        // console.log('User Data', documentSnapshot.data().sub1);
        // console.log('User Data', documentSnapshot.data().sub2);
        setFri1(documentSnapshot.data().sub1);
        setFri2(documentSnapshot.data().sub2);
        
      }
    })

    const currentUser5 = await firestore()
    .collection('timetable')
    .doc('Saturday')
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        // console.log('User Data', documentSnapshot.data().sub1);
        // console.log('User Data', documentSnapshot.data().sub2);
        setSat1(documentSnapshot.data().sub1);
        setSat2(documentSnapshot.data().sub2);
        
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
              Tuesday
            </UserName>
            <Text></Text>
            <PostText> {tue1}</PostText>
            <PostText> {tue2}</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>
          <Card1 style={styles1.card2}>
          <UserInfo>
            <UserInfoText>
            <UserName>
              Wednesday
            </UserName>
            <Text></Text>
            <PostText> {wed1}</PostText>
            <PostText> {wed2}</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>

          <Card1 
          // style={styles1.card3}
          >
          <UserInfo>
            <UserInfoText>
            <UserName>
              Thursday
            </UserName>
            <Text></Text>
            <PostText> {thu1}</PostText>
            <PostText> {thu2}</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>

          <Card1 style={styles1.card4}>
          <UserInfo>
            <UserInfoText>
            <UserName>
              Friday
            </UserName>
            <Text></Text>
            <PostText> {fri1}</PostText>
            <PostText> {fri2}</PostText>
            </UserInfoText>
          </UserInfo>
          </Card1>
          <Card1 
          // style={styles1.card3}
          >
          <UserInfo>
            <UserInfoText>
            <UserName>
              Saturday
            </UserName>
            <Text></Text>
            <PostText> {sat1}</PostText>
            <PostText> {sat2}</PostText>
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


import React, {useState, useContext, useEffect} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView,  Alert, Modal, Pressable, TextInput, Image } from "react-native";
import {ProgressBar} from '@react-native-community/progress-bar-android';

import {Picker} from '@react-native-picker/picker';
import { AuthContext } from "../../navigation/AuthProvider";
import { Card, Container, DayText, PostText, TableTime, UserInfo, UserInfoText, UserName, UserName1 } from "../styles/TimeTableCon";

import moment from "moment";
import FormInput from "../asset/components/Forminput";
import firestore from '@react-native-firebase/firestore';
import KeyboardAvoidingWrapper from '../asset/components/KeyboardAvoidingWrapper';

import TimeTablecomp from "./TimeTablecomp";

// import { Root, Popup } from 'popup-ui'

const TimeTableSt = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [days,setDays] = useState("");
  // const[sub1,setSub1]=useState();
  // const[sub2,setSub2]=useState();
  const [userData, setUserData] = useState(null);
  const [timetablepro, setTimetablepro] = useState(); 

  var sampleTimetable=[]

  const getTable = async() => {
  const currentUser = firestore()
        .collection('timetable')
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
        
            querySnapshot.forEach(documentSnapshot => {
              console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
              setTimetablepro(documentSnapshot.id, documentSnapshot.data());


            });
          })
        .catch(error => console.log(error));
  }
  useEffect(() => {
        getTable();
      }, []);

  const updatetime = async() => {
    firestore()
    .collection('timetable')
    .doc(days)
    .update({
      sub1: userData.sub1,
      sub1lec:userData.sub1lec,
      sub1clz:userData.sub1clz,
      sub2: userData.sub2, 
      sub2lec:userData.sub2lec,
      sub2clz:userData.sub2clz,
    })
    .then(() => {
      console.log('TimeTable Updated!');
      Alert.alert(
        'TimeTable Updated!'
        
      );
      
    })
    .catch(error => console.log(error))
  }
  
return (

    <ScrollView>
       <View style={styles1.centeredView}>
    </View>
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
            
            <UserName1>{days}</UserName1>
            <Text>Subject 1</Text>
            <FormInput
            placeholder="Subject 1"
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, sub1: txt})}
            //style={styles1.textInput}
          />
          <FormInput
            placeholder="Subject 1 Lecturer"
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, sub1lec: txt})}
            //style={styles1.textInput}
          />
          <FormInput
            placeholder="Subject 1 Classroom"
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, sub1clz: txt})}
            //style={styles1.textInput}
          />
          <Text>Subject 2</Text>
          <FormInput
            placeholder="Subject 2"
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, sub2: txt})}
            // style={styles1.textInput}
          />
          <FormInput
            placeholder="Subject 2 Lecturer"
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, sub2lec: txt})}
            //style={styles1.textInput}
          />
          <FormInput
            placeholder="Subject 2 Classroom"
            value={userData ? userData.Department : ''}
            onChangeText={(txt) => setUserData({...userData, sub2clz: txt})}
            //style={styles1.textInput}
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
        </KeyboardAvoidingWrapper>
      </Modal>
  
  <DayText>Happy {moment().format('dddd')}</DayText>
<Card>
  <TouchableOpacity
  // day = 'Tue'
   onPress={() => {setModalVisible(true); setDays('Tuesday')} }
  >
      <UserInfo>
          <UserInfoText>
      <UserName>Tuesday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>

<Card>
  <TouchableOpacity
  onPress={() => {setModalVisible(true); setDays('Wednesday')} }
  >
      <UserInfo>
          <UserInfoText>
      <UserName>Wednesday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>

<Card>
  <TouchableOpacity
  onPress={() => {setModalVisible(true); setDays('Thursday')} }
  >
      <UserInfo>
          <UserInfoText>
      <UserName>Thursday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>
<Card>
  <TouchableOpacity
  onPress={() => {setModalVisible(true); setDays('Friday')} }
  >
      <UserInfo>
          <UserInfoText>
      <UserName>Friday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>

<Card>
  <TouchableOpacity
  onPress={() => {setModalVisible(true); setDays('Saturday')} }
  >
      <UserInfo>
          <UserInfoText>
      <UserName>Saturday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>
<Card>
<TouchableOpacity
// onPress={() => { navigation.navigate(TimeTablecomp);}}
>
 {/* <Text style={styles1.textStyle}>Complete Time Table</Text>
<Image
                      source={require('../screen/Icons/transactiontimetable.png')}
                      
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        
                        
                      }}
                      /> */}
                      
</TouchableOpacity>
</Card>
</View>
</Container>
{/* <Text>{timetablepro}</Text> */}
</ScrollView>



);
};

export default TimeTableSt;

const styles1 = StyleSheet.create({
  ProgressBar: {
    width: 300,
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


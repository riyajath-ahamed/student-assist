import React, {useState, useContext} from "react";
import {View,Text, StyleSheet, TouchableOpacity,  ScrollView } from "react-native";
import {ProgressBar} from '@react-native-community/progress-bar-android';

import {Picker} from '@react-native-picker/picker';
import { AuthContext } from "../../navigation/AuthProvider";
import { Card, Container, DayText, PostText, TableTime, UserInfo, UserInfoText, UserName } from "../styles/TimeTableCon";

import moment from "moment";

import { Root, Popup } from 'popup-ui'

const TimeTableSt = () => {


return (
 
    <ScrollView>
<Container>
<View>
  
  <DayText>Happy {moment().format('dddd')}</DayText>
<Card>
  <TouchableOpacity
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
  <TouchableOpacity>
      <UserInfo>
          <UserInfoText>
      <UserName>Wednesday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>

<Card>
  <TouchableOpacity>
      <UserInfo>
          <UserInfoText>
      <UserName>Thursday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>
<Card>
  <TouchableOpacity>
      <UserInfo>
          <UserInfoText>
      <UserName>Friday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>

<Card>
  <TouchableOpacity>
      <UserInfo>
          <UserInfoText>
      <UserName>Saturday</UserName>
      {/* <PostText> Select the Subjects</PostText> */}
      </UserInfoText>
      </UserInfo>
  </TouchableOpacity>
</Card>

</View>
</Container>
</ScrollView>



);
};

export default TimeTableSt;

const styles1 = StyleSheet.create({
  ProgressBar: {
    width: 300,
  }


})


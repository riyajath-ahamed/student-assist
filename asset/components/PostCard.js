import React, {useContext, useEffect, useState}from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Card, Container,  UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, Divider, InteractionText } from "../../styles/FeedStyles";

import { AuthContext } from "../../navigation/AuthProvider";
import firestore from '@react-native-firebase/firestore'

import moment from "moment";
//import { TouchableOpacity } from "react-native-gesture-handler";

const PostCard = ({item, onDelete, onPress}) => {

  const {user, logout} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

    likeIcon = item.liked ? require('../../screen/Icons/tumbs2.png') : require('../../screen/Icons/tumbs.png');

//like count System 
    if (item.likes == 1) {
        likeText = '1 Like';
      } else if (item.likes > 1) {
        likeText = item.likes + ' Likes';
      } else {
        likeText = 'Like';
      }

      //comments count Sysytem

      if (item.comments == 1) {
        commentText = '1 Comment';
      } else if (item.comments > 1) {
        commentText = item.comments + ' Comments';
      } else {
        commentText = 'Comment';
      }

      const getUser = async() => {
        await firestore()
        .collection('users')
        .doc(item.userId)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data ', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }
    
      useEffect(() => {
        getUser();
      }, []); 


    return(
        <Card>
                <UserInfo>
                    <UserImg source={{uri: userData
              ? userData.userImg ||
                'https://firebasestorage.googleapis.com/v0/b/studentassistant-702c0.appspot.com/o/user.png?alt=media&token=b025c0fe-2481-4798-9577-3b8e689ff0e5'
              : 'https://firebasestorage.googleapis.com/v0/b/studentassistant-702c0.appspot.com/o/user.png?alt=media&token=b025c0fe-2481-4798-9577-3b8e689ff0e5',}} /> 
                    <UserInfoText>
                      <TouchableOpacity onPress={onPress}>
                        <UserName>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</UserName>
                      </TouchableOpacity>
                      
                        {/* <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime> */}
                        <PostTime>{userData ? userData.accounttyp || 'Account Not Specified' : ''}{"\t"}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>
                    {item.post}
                </PostText>
                {/* //<PostImg source={require('../../asset/Post/post1.jpg')} /> */}
                {item.postImg != null ? <PostImg source={{uri: item.postImg}}/> : <Divider/>}
                
                <InteractionWrapper>
                    
                     <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
                     
                    {user.uid == item.userId ? (
                    <Interaction onPress={() => onDelete(item.id)}>
                        <Image source={require('../../asset/Icon/bin.png')} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText>{}</InteractionText>
                    </Interaction>
                    ) :<TouchableOpacity onPress={() =>{}}>
                    <Image source={require('../../screen/Icons/menu.png')}
                                      resizeMode="contain"
                                      
                                      style={{
                                          width: 20,
                                          height: 20,
                                          marginLeft: 'auto',
                                          marginTop: 0,
                                      }}
                                      />
                    </TouchableOpacity>}
                </InteractionWrapper>
            </Card>
    );
}

export default PostCard;
import React, {useContext}from "react";
import {View, Text, StyleSheet, Image } from 'react-native';

import { Card, Container,  UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, Divider, InteractionText } from "../../styles/FeedStyles";

import { AuthContext } from "../../navigation/AuthProvider";
import firestore from '@react-native-firebase/firestore'

import moment from "moment";

const PostCard = ({item, onDelete}) => {

  const {user, logout} = useContext(AuthContext);

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


    return(
        <Card>
                <UserInfo>
                    <UserImg source={{uri: item.userImg}} /> 
                    <UserInfoText>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>
                    {item.post}
                </PostText>
                {/* //<PostImg source={require('../../asset/Post/post1.jpg')} /> */}
                {item.postImg != null ? <PostImg source={{uri: item.postImg}}/> : <Divider/>}
                
                <InteractionWrapper>
                    <Interaction active  ={item.liked} >
                        <Image source={likeIcon} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText active = {item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Image source={require('../../asset/Icon/comment.png')} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>

                    {user.uid == item.userId ? (
                    <Interaction onPress={() => onDelete(item.id)}>
                        <Image source={require('../../asset/Icon/bin.png')} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText>{}</InteractionText>
                    </Interaction>
                    ) : null }
                </InteractionWrapper>
            </Card>
    );
}

export default PostCard;
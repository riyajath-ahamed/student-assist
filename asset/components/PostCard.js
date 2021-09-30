import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native';

import { Card, Container,  UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, Divider, InteractionText } from "../../styles/FeedStyles";



const PostCard = ({item}) => {

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
                    <UserImg source={item.userImg} /> 
                    <UserInfoText>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{item.postTime}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>
                    {item.post}
                </PostText>
                {/* //<PostImg source={require('../../asset/Post/post1.jpg')} /> */}
                {item.postImg != 'none' ? <PostImg source={item.postImg}/> : <Divider/>}
                
                <InteractionWrapper>
                    <Interaction active  ={item.liked} >
                        <Image source={likeIcon} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText active = {item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Image source={require('../../asset/Icon/comment.png')} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>
    );
}

export default PostCard;
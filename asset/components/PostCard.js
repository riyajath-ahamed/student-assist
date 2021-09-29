import React from "react";

import { Card, Container,  UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, Divider, InteractionText } from "../styles/FeedStyles";

const PostCard = () => {

    return(
        <Card>
                <UserInfo>
                    <UserImg source={require('../asset/user/user1.jpeg')} /> 
                    <UserInfoText>
                    <UserName>Dilshan</UserName>
                    <PostTime>4 Hours ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>
                    There will be a Meeting In our Auditorim
                </PostText>
                <PostImg source={require('../asset/Post/post1.jpg')} />
                <InteractionWrapper>
                    <Interaction active >
                        <Image source={require('../asset/Icon/thumbs.png')} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <InteractionText active > 12 Noted</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Image source={require('../asset/Icon/comment.png')} resizeMode="contain" style={{ width: 20, height: 20,}}/>
                        <Text> Comment</Text>
                    </Interaction>
                </InteractionWrapper>
            </Card>
    );
}

export default PostCard;
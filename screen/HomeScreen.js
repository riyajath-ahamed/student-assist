import React, {useContext} from "react";
import {View, Text, StyleSheet, Image, FlatList } from 'react-native';

//import{Card, Container} from '/Programming/Student/styles/FeedStyles'


import { AuthContext } from "../navigation/AuthProvider";

import PostCard from "../asset/components/PostCard";
import {Container} from "../styles/FeedStyles";

const Posts = [
    {
        id: '1',
        userName: 'Kavindu Dilshan',
        userImg: require('../asset/user/user1.jpeg'),
        postTime: '1 mins ago',
        post:
          'Hey there, The general meeting is happening now in Audiroium !!!',
        postImg: require('../asset/Post/post1.jpg'),
        liked: true,
        likes: '14',
        comments: '5', 
    },
    {
        id: '2',
        userName: 'Kalana Perera',
        userImg: require('../asset/user/user2.jpeg'),
        postTime: '5 mins ago',
        post:
          'Hey there, The general meeting is happening now in Audiroium !!!',
        postImg: require('../asset/Post/post1.jpg'),
        liked: false,
        likes: '31',
        comments: '15', 
    },
    {
        id: '4',
        userName: 'Riyajath Ahamed',
        userImg: require('../asset/user/user4.jpeg'),
        postTime: '45 mins ago',
        post:
          'Hey there welcom to the new assistant app "Student Assist!!!"',
        postImg: 'none',
        liked: false,
        likes: '5',
        comments: '0', 
    },
    {
        id: '5',
        userName: 'Hithaisha Perera',
        userImg: require('../asset/user/user5.jpeg'),
        postTime: '55 mins ago',
        post:
          'HoD Meeting at HQ-3 for IT/IS 37',
        postImg: 'none',
        liked: false,
        likes: '5',
        comments: '0', 
    },

]

const HomeScreen =() => {
    const {user, logout}= useContext(AuthContext);

    return(
        <Container>
            <FlatList 
            data={Posts}
            renderItem={({item}) => <PostCard item={item}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
            
        </Container>
    );
}

export default HomeScreen;
